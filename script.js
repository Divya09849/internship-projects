const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / 300,
  0.1,
  1000
);


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, 300);
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, 300);
});

document.getElementById("3d-container").appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0x00ffcc,
  wireframe: true
});
const cube = new THREE.Mesh(geometry, material);


scene.add(cube);


camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);

 
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
function showSection(section) {
  document.getElementById("home").style.display = "none";
  document.getElementById("courses").style.display = "none";
  document.getElementById("feature").style.display = "none";
  document.getElementById("contact").style.display = "none";

  document.getElementById(section).style.display = "block";
}