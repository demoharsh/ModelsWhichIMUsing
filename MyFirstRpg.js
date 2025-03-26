const scene = new THREE.Scene();
const fov = 75;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, window.innerWidth/window.innerHeight, near, far);
camera.position.set(0,0,10);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

const objLoader = new THREE.OBJLoader();
objLoader.load('images/MyfirstLoader/6_Pounder_Brass_OBJ/6_Pounder_Brass_Cannon.obj', (object)=>{
	scene.add(object);
	object.scene.scale.set(0.5, 0.5, 0.5); // Scale down
	object.scene.position.set(0, -1, 0);  // Move down
	object.scene.rotation.y = Math.PI / 4; // Rotate 45 degrees
})

function animate(){
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

animate();