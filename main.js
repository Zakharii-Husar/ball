import * as THREE from 'three';
import { camera, cameraControl, sphere } from './mods/control';



const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(sphere);


// Create a floor/grid
const floorGeometry = new THREE.PlaneGeometry(10, 10, 10, 10); // Change the size and segments as needed
const floorMaterial = new THREE.MeshBasicMaterial({ color: "yellow", wireframe: true }); // Adjust color and style
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotate to be horizontal
scene.add(floor);



//RENDER
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cameraControl();
}
animate();