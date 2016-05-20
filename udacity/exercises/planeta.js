

var scene;
var camera;
var renderer;

function createRenderer(){
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0x000000,1.0);
	renderer.setSize(window.innerWidth,window.innerHeight);
	renderer.shadowMapEnabled = true;
	
	// not found render.shadowMap.enabled  like in the totorial !!
}

function createCamera(){
	camera = new THREE.PerspectiveCamera(
				45,
				window.innerWidth / window.innerHeight,
				0.1,
				1000);
	camera.position.x = 90;
	camera.position.y = 32;
	camera.position.z = 32;
	camera.lookAt(scene.position);
}


function createLight(){
	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(10,20,20);
	spotLight.shadowCameraNear = 20;
	spotLight.shadowCameraFar = 50;
	spotLight.castShadow = true;
	scene.add(spotLight);
}


function createEarth(){
	var sphereGeometry = new THREE.SphereGeometry(15,30,30);
	var loader = new THREE.ImageLoader();
	console.log(loader);
	loader.load( 'assets/earthmap2k.jpg',function(texture){
								console.log('inside');
								var earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture } );
								var earthMesh = new THREE.Mesh(sphereGeometry,earthMaterial);
								earthMesh.name = 'earth';
								scene.add(earthMesh);
						},
						// Function called when download progresses
						function ( xhr ) {
							console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
						},
						// Function called when download errors
						function ( xhr ) {
							console.log( 'An error happened' );
						} 
			);
	console.log('after');
}
function init(){
	scene = new THREE.Scene();
	
	createRenderer();
	createCamera();
	createLight();
	createEarth();
	var container = document.getElementById("container");
	container.appendChild(renderer.domElement);
	
	render();
}
function render(){
	renderer.render(scene,camera);
	requestAnimationFrame(render);
}

init();