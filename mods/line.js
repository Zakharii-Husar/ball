import * as THREE from 'three';

const material = new THREE.LineBasicMaterial( { color: "red" } );

const points = [];
points.push( new THREE.Vector3( 0 - window.innerWidth, 0 - window.innerHeight, -50 ) );
points.push( new THREE.Vector3( window.innerWidth, window.innerHeight, 50 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

export const line = new THREE.Line( geometry, material );