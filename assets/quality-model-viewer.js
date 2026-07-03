import * as THREE from "three";
import { STLLoader } from "./vendor/three/STLLoader.js";

const VIEWER_SELECTOR = "[data-quality-model]";
const CANVAS_SELECTOR = ".quality-model-canvas";
const MODEL_TARGET_SIZE = 3.32;
const MODEL_NARROW_TARGET_SIZE = 3;
const MODEL_VERTICAL_OFFSET = 0.2;
const MODEL_BASE_ROTATION = -0.42;
const MODEL_TURN_SPEED = 0.00032;
const CAMERA_FOV = 34;
const CAMERA_DISTANCE = 7.2;
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function setViewerState(viewer, state) {
  viewer.dataset.qualityModelState = state;
}

function createRenderer(canvasHost) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  renderer.setClearColor(0x000000, 0);
  canvasHost.appendChild(renderer.domElement);

  return renderer;
}

function addSceneLights(scene) {
  const fill = new THREE.HemisphereLight(0xf0f5f5, 0x343a3b, 2.18);
  scene.add(fill);

  const key = new THREE.DirectionalLight(0xffffff, 3.15);
  key.position.set(3.6, 5.2, 4.5);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x8bb7d8, 1.6);
  rim.position.set(-4.2, 2.4, -3.8);
  scene.add(rim);
}

function normalizeGeometry(geometry, targetSize) {
  geometry.rotateX(-Math.PI / 2);
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();

  const box = geometry.boundingBox;
  const center = new THREE.Vector3();
  const size = new THREE.Vector3();
  box.getCenter(center);
  box.getSize(size);

  geometry.translate(-center.x, -center.y, -center.z);

  return targetSize / (Math.max(size.x, size.y, size.z) || 1);
}

function resizeRenderer(viewer, renderer, camera) {
  const bounds = viewer.getBoundingClientRect();
  const width = Math.max(1, Math.round(bounds.width));
  const height = Math.max(1, Math.round(bounds.height));

  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function initQualityModelViewer(viewer) {
  if (viewer.dataset.qualityModelInitialized === "true") return;

  const canvasHost = viewer.querySelector(CANVAS_SELECTOR);
  const modelPath = viewer.dataset.qualityModel;

  viewer.dataset.qualityModelInitialized = "true";
  setViewerState(viewer, "loading");

  if (!canvasHost || !modelPath) {
    setViewerState(viewer, "error");
    return;
  }

  let renderer;
  try {
    renderer = createRenderer(canvasHost);
  } catch (error) {
    console.warn("Quality model WebGL renderer failed.", error);
    setViewerState(viewer, "error");
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(CAMERA_FOV, 1, 0.1, 100);
  const modelGroup = new THREE.Group();

  camera.position.set(0, 0.58, CAMERA_DISTANCE);
  camera.lookAt(0, 0.08, 0);
  modelGroup.position.y = MODEL_VERTICAL_OFFSET;
  modelGroup.rotation.y = MODEL_BASE_ROTATION;
  scene.add(modelGroup);
  addSceneLights(scene);

  const material = new THREE.MeshStandardMaterial({
    color: 0xa3aaa8,
    roughness: 0.82,
    metalness: 0.04,
  });

  let modelReady = false;
  let animationFrame = 0;

  const renderFrame = (time = 0) => {
    if (!modelReady) return;

    if (!reducedMotionQuery.matches) {
      modelGroup.rotation.y = MODEL_BASE_ROTATION + time * MODEL_TURN_SPEED;
    }

    renderer.render(scene, camera);
    animationFrame = window.requestAnimationFrame(renderFrame);
  };

  const startRendering = () => {
    if (animationFrame) return;
    animationFrame = window.requestAnimationFrame(renderFrame);
  };

  const resize = () => {
    resizeRenderer(viewer, renderer, camera);
    if (modelReady) renderer.render(scene, camera);
  };

  resize();

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(viewer);
  } else {
    window.addEventListener("resize", resize, { passive: true });
  }

  const loader = new STLLoader();
  const modelUrl = new URL(modelPath, window.location.href);

  loader.load(
    modelUrl.href,
    (geometry) => {
      const viewerWidth = viewer.getBoundingClientRect().width;
      const targetSize = viewerWidth < 520 ? MODEL_NARROW_TARGET_SIZE : MODEL_TARGET_SIZE;
      const modelScale = normalizeGeometry(geometry, targetSize);
      const mesh = new THREE.Mesh(geometry, material);

      mesh.scale.setScalar(modelScale);
      modelGroup.add(mesh);
      modelReady = true;
      setViewerState(viewer, "ready");
      resize();
      startRendering();
    },
    undefined,
    (error) => {
      console.warn("Quality model STL failed to load.", error);
      setViewerState(viewer, "error");
    },
  );
}

function bootQualityModelViewers() {
  const viewers = Array.from(document.querySelectorAll(VIEWER_SELECTOR));
  if (!viewers.length) return;

  if (!("IntersectionObserver" in window)) {
    viewers.forEach(initQualityModelViewer);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        initQualityModelViewer(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "360px 0px" },
  );

  viewers.forEach((viewer) => observer.observe(viewer));
}

bootQualityModelViewers();
