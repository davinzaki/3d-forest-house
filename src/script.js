import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { Sky } from "three/addons/objects/Sky.js";

/**
 * Base
 */
// Debug
// const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
// scene.background = new THREE.Color("#87ceeb");

/**
 * Textures
 */

const textureLoader = new THREE.TextureLoader();

// floor
const floorAlphaTexture = textureLoader.load("./textures/floor/alpha.webp");
const floorColorTexture = textureLoader.load("./textures/floor/color.webp");
const floorNormalTexture = textureLoader.load("./textures/floor/normal.webp");
const floorARMTexture = textureLoader.load("./textures/floor/arm.webp");
const floorDisplacementTexture = textureLoader.load(
  "./textures/floor/disp.webp",
);

floorColorTexture.colorSpace = THREE.SRGBColorSpace;

floorColorTexture.repeat.set(2, 2);
floorNormalTexture.repeat.set(2, 2);
floorARMTexture.repeat.set(2, 2);
floorDisplacementTexture.repeat.set(2, 2);

floorColorTexture.wrapS = THREE.RepeatWrapping;
floorARMTexture.wrapS = THREE.RepeatWrapping;
floorNormalTexture.wrapS = THREE.RepeatWrapping;
floorDisplacementTexture.wrapS = THREE.RepeatWrapping;

floorColorTexture.wrapT = THREE.RepeatWrapping;
floorARMTexture.wrapT = THREE.RepeatWrapping;
floorNormalTexture.wrapT = THREE.RepeatWrapping;
floorDisplacementTexture.wrapT = THREE.RepeatWrapping;

// walls
const wallsColorTexture = textureLoader.load("./textures/wall/diff.webp");
const wallsNormalTexture = textureLoader.load("./textures/wall/normal.webp");
const wallsARMTexture = textureLoader.load("./textures/wall/arm.webp");
const wallsDisplacementTexture = textureLoader.load(
  "./textures/wall/disp.webp",
);

wallsColorTexture.colorSpace = THREE.SRGBColorSpace;

// roof
const roofColorTexture = textureLoader.load("./textures/roof/diff.webp");
const roofNormalTexture = textureLoader.load("./textures/roof/normal.webp");
const roofARMTexture = textureLoader.load("./textures/roof/arm.webp");
const roofDisplacementTexture = textureLoader.load("./textures/roof/disp.webp");

roofColorTexture.colorSpace = THREE.SRGBColorSpace;

roofColorTexture.repeat.set(4, 1);
roofARMTexture.repeat.set(4, 1);
roofNormalTexture.repeat.set(4, 1);

roofColorTexture.wrapS = THREE.RepeatWrapping;
roofARMTexture.wrapS = THREE.RepeatWrapping;
roofNormalTexture.wrapS = THREE.RepeatWrapping;

// bush
const bushColorTexture = textureLoader.load("./textures/bush/diff.webp");
const bushNormalTexture = textureLoader.load("./textures/bush/normal.webp");
const bushARMTexture = textureLoader.load("./textures/bush/arm.webp");
const bushDisplacementTexture = textureLoader.load("./textures/bush/disp.webp");

bushColorTexture.colorSpace = THREE.SRGBColorSpace;

bushColorTexture.repeat.set(3, 1);
bushARMTexture.repeat.set(3, 1);
bushNormalTexture.repeat.set(3, 1);

bushColorTexture.wrapS = THREE.RepeatWrapping;
bushARMTexture.wrapS = THREE.RepeatWrapping;
bushNormalTexture.wrapS = THREE.RepeatWrapping;

// rocks
const rocksColorTexture = textureLoader.load("./textures/rocks/diff.webp");
const rocksNormalTexture = textureLoader.load("./textures/rocks/normal.webp");
const rocksARMTexture = textureLoader.load("./textures/rocks/arm.webp");
const rocksDisplacementTexture = textureLoader.load(
  "./textures/rocks/disp.webp",
);

rocksColorTexture.colorSpace = THREE.SRGBColorSpace;

// trunk
const trunkColorTexture = textureLoader.load("./textures/trunk/diff.webp");
const trunkNormalTexture = textureLoader.load("./textures/trunk/normal.webp");
const trunkARMTexture = textureLoader.load("./textures/trunk/arm.webp");
const trunkDisplacementTexture = textureLoader.load(
  "./textures/trunk/disp.webp",
);

trunkColorTexture.colorSpace = THREE.SRGBColorSpace;

// door
const doorColorTexture = textureLoader.load("./textures/door/color.webp");
const doorAlphaTexture = textureLoader.load("./textures/door/alpha.webp");
const doorAmbientOcclusionTexture = textureLoader.load(
  "./textures/door/ambientOcclusion.webp",
);
const doorHeightTexture = textureLoader.load("./textures/door/height.webp");
const doorNormalTexture = textureLoader.load("./textures/door/normal.webp");
const doorMetalnessTexture = textureLoader.load(
  "./textures/door/metalness.webp",
);
const doorRoughnessTexture = textureLoader.load(
  "./textures/door/roughness.webp",
);

doorColorTexture.colorSpace = THREE.SRGBColorSpace;

/**
 * Materials
 */

// floor
const floorMaterial = new THREE.MeshStandardMaterial({
  alphaMap: floorAlphaTexture,
  transparent: true,
  map: floorColorTexture,
  normalMap: floorNormalTexture,
  aoMap: floorARMTexture,
  roughnessMap: floorARMTexture,
  metalnessMap: floorARMTexture,
  displacementMap: floorDisplacementTexture,
  displacementScale: 0.3,
  displacementBias: -0.2,
});

// walls
const wallsMaterial = new THREE.MeshStandardMaterial({
  map: wallsColorTexture,
  normalMap: wallsNormalTexture,
  aoMap: wallsARMTexture,
  roughnessMap: wallsARMTexture,
  metalnessMap: wallsARMTexture,
  displacementMap: wallsDisplacementTexture,
  displacementScale: 0.3,
  displacementBias: -0.2,
});

// roof
const roofMaterial = new THREE.MeshStandardMaterial({
  map: roofColorTexture,
  normalMap: roofNormalTexture,
  aoMap: roofARMTexture,
  roughnessMap: roofARMTexture,
  metalnessMap: roofARMTexture,
});

// bush
const bushMaterial = new THREE.MeshStandardMaterial({
  color: "#ccffcc",
  map: bushColorTexture,
  normalMap: bushNormalTexture,
  aoMap: bushARMTexture,
  roughnessMap: bushARMTexture,
  metalnessMap: bushARMTexture,
});

// boulder
const boulderMaterial = new THREE.MeshStandardMaterial({
  map: rocksColorTexture,
  normalMap: rocksNormalTexture,
  aoMap: rocksARMTexture,
  roughnessMap: rocksARMTexture,
  metalnessMap: rocksARMTexture,
  displacementMap: rocksDisplacementTexture,
  displacementScale: 0.3,
  displacementBias: -0.2,
});

// trunk
const trunkMaterial = new THREE.MeshStandardMaterial({
  map: trunkColorTexture,
  normalMap: trunkNormalTexture,
  aoMap: trunkARMTexture,
  roughnessMap: trunkARMTexture,
  metalnessMap: trunkARMTexture,
  displacementMap: trunkDisplacementTexture,
  displacementScale: 0.3,
  displacementBias: -0.2,
});

// door
const doorMaterial = new THREE.MeshStandardMaterial({
  map: doorColorTexture,
  transparent: true,
  alphaMap: doorAlphaTexture,
  aoMap: doorAmbientOcclusionTexture,
  displacementMap: doorHeightTexture,
  normalMap: doorNormalTexture,
  metalnessMap: doorMetalnessTexture,
  roughnessMap: doorRoughnessTexture,
  displacementScale: 0.15,
  displacementBias: -0.04,
});

/**
 * Objects
 */

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(30, 30, 100, 100),
  floorMaterial,
);
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

const landGroup = new THREE.Group();
scene.add(landGroup);

// /**
//  * House
//  */
const house = new THREE.Group();
scene.add(house);
landGroup.add(house);

// Walls
const walls = new THREE.Mesh(new THREE.BoxGeometry(4, 2.5, 4), wallsMaterial);
house.add(walls);
walls.position.y = 1.25;
// walls.castShadow = true;
// walls.receiveShadow = true;

// Roof
const roof = new THREE.Mesh(new THREE.ConeGeometry(3.5, 1.5, 4), roofMaterial);
house.add(roof);
roof.position.y = 2.5 + 0.75;
roof.rotation.y = Math.PI * 0.25;
// roof.castShadow = true;
// roof.receiveShadow = true;

// Door
const door = new THREE.Mesh(
  new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
  doorMaterial,
);
house.add(door);
door.position.y = 1.1;
door.position.z = 2.01;

// Door light
const doorLight = new THREE.PointLight("#ff7d46", 5);
doorLight.position.set(0, 2.2, 2.5);
house.add(doorLight);

// Bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16);

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.scale.set(0.5, 0.5, 0.5);
bush1.position.set(2.2, 0.2, 2.2);

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.scale.set(0.25, 0.25, 0.25);
bush2.position.set(1.5, 0.1, 2.5);

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.set(0.6, 0.6, 0.6);
bush3.position.set(-2.2, 0.3, 2.2);

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.scale.set(0.4, 0.4, 0.4);
bush4.position.set(-2.5, 0.2, 1);

const bush5 = new THREE.Mesh(bushGeometry, bushMaterial);
bush5.scale.set(0.35, 0.35, 0.35);
bush5.position.set(2.3, 0.15, 0);

house.add(bush1, bush2, bush3, bush4, bush5);

// boulders
const boulders = new THREE.Group();
landGroup.add(boulders);
const boulderMesh = new THREE.IcosahedronGeometry(1, 2);

for (let i = 0; i < 15; i++) {
  const boulder = new THREE.Mesh(boulderMesh, boulderMaterial);

  const angle = Math.random() * Math.PI * 2;
  const radius = 4 + Math.random() * 10;

  boulder.position.x = Math.sin(angle) * radius;
  boulder.position.z = Math.cos(angle) * radius;

  boulder.position.y = Math.random() * 0.1;

  const scale = Math.random();

  boulder.rotation.x = Math.random() - 0.5;
  boulder.rotation.y = Math.random() - 0.5;
  boulder.rotation.z = Math.random() - 0.5;

  boulder.scale.set(scale, scale, scale);

  boulders.add(boulder);
}

for (let boulder of boulders.children) {
  boulder.castShadow = true;
  boulder.receiveShadow = true;
}

// trees
for (let i = 0; i < 15; i++) {
  const tree = new THREE.Group();

  const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 6);
  trunkGeometry.translate(0, 1.5, 0);

  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);

  const leavesGeometry = new THREE.ConeGeometry(2, 5, 6);
  leavesGeometry.translate(0, 2 + 2.5, 0);
  const leaves = new THREE.Mesh(leavesGeometry, bushMaterial);
  tree.add(trunk, leaves);

  // random scale for trees
  const scale = 0.5 + Math.random();
  tree.scale.set(scale, scale, scale);

  // radius trees random position
  const angle = Math.random() * Math.PI * 2; // random angle (circling)
  const radius = 9 + Math.random() * 10; // distance from center (house)

  tree.position.x = Math.cos(angle) * radius;
  tree.position.z = Math.sin(angle) * radius;

  landGroup.add(tree);
}

// clouds
for (let i = 0; i < 7; i++) {
  const cloudGroup = new THREE.Group();

  const cloudMaterial = new THREE.MeshLambertMaterial({ color: "#ffffff" });

  const cloud1 = new THREE.Mesh(
    new THREE.SphereGeometry(2, 24, 24),
    cloudMaterial,
  );

  const cloud2 = new THREE.Mesh(
    new THREE.SphereGeometry(2, 24, 24),
    cloudMaterial,
  );
  cloud2.position.x = 1.5;
  cloud2.scale.set(0.8, 0.8, 0.8);

  const cloud3 = new THREE.Mesh(
    new THREE.SphereGeometry(2, 24, 24),
    cloudMaterial,
  );
  cloud3.position.x = -1.5;
  cloud3.scale.set(0.6, 0.6, 0.6);

  cloudGroup.add(cloud1, cloud2, cloud3);

  const angle = Math.random() * Math.PI * 2;
  const radius = 4 + Math.random() * 6;

  cloudGroup.position.x = Math.cos(angle) * radius;
  cloudGroup.position.z = Math.sin(angle) * radius;
  cloudGroup.position.y = 10 + Math.random() * 8;

  const scale = 0.5 + Math.random() * 1.5;
  cloudGroup.scale.set(scale, scale * 0.6, scale);

  cloudGroup.rotation.y = Math.random() * Math.PI;

  landGroup.add(cloudGroup);
}

// fireflies
const fireflies = [];
for (let i = 0; i < 30; i++) {
  const fireFly = new THREE.Group();

  const fireFlyMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.05),
    new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
    }),
  );

  const fireFlyLight = new THREE.PointLight(0xffff00);

  fireFly.add(fireFlyMesh, fireFlyLight);

  fireFly.position.y = Math.random() * 5;

  fireFly.position.x = (Math.random() - 0.5) * 20;
  fireFly.position.z = (Math.random() - 0.5) * 20;

  fireflies.push(fireFly);

  landGroup.add(fireFly);
}

/**
 * Sky
 */
const sky = new Sky();
sky.scale.set(100, 100, 100);
scene.add(sky);

sky.material.uniforms["turbidity"].value = 10;
sky.material.uniforms["rayleigh"].value = 3;
sky.material.uniforms["mieCoefficient"].value = 0.1;
sky.material.uniforms["mieDirectionalG"].value = 0.95;
sky.material.uniforms["sunPosition"].value.set(0.3, -0.038, -0.95);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight("#86cdff", 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight("#86cdff", 1);
directionalLight.position.set(4, 5, -2);
scene.add(directionalLight);

// Mappings
directionalLight.shadow.mapSize.width = 256;
directionalLight.shadow.mapSize.height = 256;
directionalLight.shadow.camera.top = 8;
directionalLight.shadow.camera.right = 8;
directionalLight.shadow.camera.bottom = -8;
directionalLight.shadow.camera.left = -8;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 20;

// Cast and receive
directionalLight.castShadow = true;
walls.castShadow = true;
walls.receiveShadow = true;
roof.castShadow = true;
floor.receiveShadow = true;

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
);

// camera.position.x = -30;
// camera.position.y = 20;
// camera.position.z = 25;
camera.position.set(-5, 8, 20);
// camera.position.x = 4;
// camera.position.y = 2;
// camera.position.z = 9;
scene.add(camera);

camera.lookAt(landGroup.position);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

/**
 * Fog
 */

scene.fog = new THREE.FogExp2("#04343f", 0.03);

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // landGroup.position.y = Math.sin(elapsedTime * 0.9) * 0.9;

  fireflies.forEach((fireFly, index) => {
    const angle = elapsedTime * 0.5 + index;
    fireFly.position.x += Math.cos(angle) * 0.02;
    fireFly.position.z += Math.sin(angle) * 0.02;
    fireFly.position.y = 1 + Math.abs(Math.sin(elapsedTime + index)) * 2;

    fireFly.children[0].material.opacity =
      1 - Math.abs(Math.sin(elapsedTime * 3 + index) * 1);
    fireFly.children[1].intensity = 1 + Math.sin(elapsedTime * 3 + index) * 1;
  });

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
