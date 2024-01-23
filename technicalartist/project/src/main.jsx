import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client'

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const gltfLoader = new GLTFLoader();

// Scene
const scene = new THREE.Scene();

// Debug
// const gui = new dat.GUI();

function App() {
  useEffect(() => {
    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // GLTF Load 3D

    gltfLoader.load(`/terrain.glb`, (gltf) => {
      scene.add(gltf.scene);
    });

    // Lights

    var pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.x = 0;
    pointLight.position.y = 100;
    pointLight.position.z = 0;
    scene.add(pointLight);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      // Update sizes
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Update camera
      camera.aspect = canvas.width / canvas.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(canvas.width, canvas.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    addEventListener("keydown", (event) => {
      if (event.key === "w") {
        camera.position.z -= 1;
      } else if (event.key === "s") {
        camera.position.z += 1;
      } else if (event.key === "a") {
        camera.position.x -= 1;
      } else if (event.key === "d") {
        camera.position.x += 1;
      } else if (event.key === "q") {
        camera.position.y += 1;
      } else if (event.key === "e") {
        camera.position.y -= 1;
      }

      camera.updateWorldMatrix();
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.width / canvas.height,
      0.1,
      10000
    );
    camera.position.x = 1000;
    camera.position.y = 1000;
    camera.position.z = -1000;
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: false,
    });
    renderer.setSize(canvas.width, canvas.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Animate
     */

    // const clock = new THREE.Clock();

    const tick = () => {
      // const elapsedTime = clock.getElapsedTime();

      // Update objects
      // sphere.rotation.y = 0.5 * elapsedTime;

      // Update Orbital Controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return (
    <div>
      <canvas className="webgl"></canvas>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
