import * as THREE from 'three';

export const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 1;
camera.position.z = 7;

const geometry = new THREE.SphereGeometry( 0.3, 16, 8 ); 
const material = new THREE.MeshBasicMaterial( { color: "blue", wireframe: true } ); 

export const sphere = new THREE.Mesh( geometry, material ); 

sphere.position.y = 0.3

export  const cameraControl = () => {
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp"){
            camera.position.z -= 0.001
            sphere.position.z -= 0.001
            sphere.rotation.x -= 0.01
        }
        if (event.key === "ArrowDown"){
            camera.position.z += 0.001
            sphere.position.z += 0.001
            sphere.rotation.x += 0.01
        }
        if (event.key === "ArrowRight"){
            camera.rotation.y -= 0.001
        }
        if (event.key === "ArrowLeft"){
            camera.rotation.y += 0.001
        }
      });
}