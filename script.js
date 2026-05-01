const container = document.getElementById("3d-container");

if (container && typeof THREE !== "undefined") {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    65,
    container.clientWidth / 300,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });

  renderer.setSize(container.clientWidth, 300);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1.4, 1.4, 1.4);

  const material = new THREE.MeshBasicMaterial({
    color: 0x2563eb,
    wireframe: true
  });

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 4;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.006;
    cube.rotation.y += 0.008;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    renderer.setSize(container.clientWidth, 300);
    camera.aspect = container.clientWidth / 300;
    camera.updateProjectionMatrix();
  });
}

const contactForm = document.querySelector(".contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "Thank you! Your message has been received.";
    contactForm.reset();
  });
}