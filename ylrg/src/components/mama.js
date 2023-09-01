import '../style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setY(-3);

renderer.render( scene, camera);

const jeff = new THREE.TextureLoader().load('https://i.imgur.com/cDId6pB.jpg');
//const Front = new THREE.TextureLoader().load('textures/Front.png');
//const Left = new THREE.TextureLoader().load("textures/Left.png");
//const Up = new THREE.TextureLoader().load("textures/Up.png");
//const Down = new THREE.TextureLoader().load("textures/Down.png");

const geometry = new THREE.BoxGeometry(3,3,3);
const material = new THREE.MeshBasicMaterial({ map: jeff})

const box = new THREE.Mesh( geometry, material);

scene.add(box)

const pointLight = new THREE.PointLight(0xffffff, 1.0);
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
scene.add(pointLight, ambientLight);



const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

//const jeffTexture = new THREE.TextureLoader().load('textures/jeff.png');

//const jeff = new THREE.Mesh(
  //new THREE.BoxGeometry(6,6,6),
  //new THREE.MeshBasicMaterial( { map: jeffTexture })
//);

//scene.add(jeff)


function animate() {
  requestAnimationFrame( animate );

  box.rotation.x += 0.01;
  box.rotation.y += 0.005;
  box.rotation.z += 0.01;
   
  controls.update();

  renderer.render(scene, camera)
}

animate();