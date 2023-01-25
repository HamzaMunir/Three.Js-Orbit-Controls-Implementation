import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

var scene, camera, renderer, controls;

function init()
{

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const gridHelper = new THREE.GridHelper(12, 12);
    scene.add(gridHelper);

    controls = new OrbitControls(camera, renderer.domElement);

    camera.position.set(6, 8, 14);

    controls.enablePan = false;
    //controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false;
    controls.enableDamping = true;

    controls.update();
    sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xD0E0E3 });
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    light = new THREE.PointLight(0xDFDFDF);
    light.position.set(10, 14, 10);
    scene.add(light);

    light2 = new THREE.PointLight(0xA99989);
    light2.position.set(-10, 0, 0);
    scene.add(light2);

    light3 = new THREE.PointLight(0x96C2C9);
    light3.position.set(3, -10, -8);
    scene.add(light3);

    light4 = new THREE.PointLight(0x626262);
    light4.position.set(0, 20, 0);
    scene.add(light4);

    light5 = new THREE.PointLight(0x626262);
    light5.position.set(0, -20, 0);
    scene.add(light5);
    window.requestAnimationFrame(animate);
}

function animate()
{
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}

function onWindowResize()
{

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}


window.addEventListener('resize', onWindowResize);

window.onload = init;