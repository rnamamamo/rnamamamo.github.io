document.addEventListener('DOMContentLoaded', function() {
    const card1 = document.getElementById('card-1');

    card1.addEventListener('click', function() {
        card1.classList.toggle('is-flipped');
    });
    const card2 = document.getElementById('card-2');

    card2.addEventListener('click', function() {
        card2.classList.toggle('is-flipped');
    });
    const card3 = document.getElementById('card-3');

    card3.addEventListener('click', function() {
        card3.classList.toggle('is-flipped');
    });
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(10, 0, 0);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1); 
document.getElementById('model-viewer').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

function colorDistance(color1, color2) {
    return Math.sqrt(
        Math.pow(color1.r - color2.r, 2) +
        Math.pow(color1.g - color2.g, 2) +
        Math.pow(color1.b - color2.b, 2)
    );
}

function approximateColor(color) {
    const red1 = new THREE.Color(0x742414);
    const red2 = new THREE.Color(0xdc5039);
    const red3 = new THREE.Color(0xa83320);
    const red4 = new THREE.Color(0x88291c);
    const red5 = new THREE.Color(0xc7402b);
    const red6 = new THREE.Color(0xbc3c2c);
    const red7 = new THREE.Color(0x942c1c);
    const red8 = new THREE.Color(0xcc4c34);
    const red9 = new THREE.Color(0xbc3c24);
    const blue1 = new THREE.Color(0x4484e2);
    const blue2 = new THREE.Color(0x345c9e);
    const blue3 = new THREE.Color(0x4d8ef4);
    const blue4 = new THREE.Color(0x3869ba);
    const blue5 = new THREE.Color(0x447bd4);
    const blue6 = new THREE.Color(0x4b84ec);
    const blue7 = new THREE.Color(0x447cdc);
    const blue8 = new THREE.Color(0x3c74c9);
    const blue9 = new THREE.Color(0x3464ac);
    const green1 = new THREE.Color(0x4c8b24);
    const green2 = new THREE.Color(0x5ea72e);
    const green3 = new THREE.Color(0x44841c);
    const green4 = new THREE.Color(0x376718);
    const green5 = new THREE.Color(0x447c1c);
    const green6 = new THREE.Color(0x3d741c);
    const green7 = new THREE.Color(0x5c9c2c);
    const green8 = new THREE.Color(0x4c841c);
    const green9 = new THREE.Color(0x549c27);
    const yellow1 = new THREE.Color(0xfcfc04);
    const yellow2= new THREE.Color(0xfcd404);
    const yellow3 = new THREE.Color(0xfce704);
    const yellow4 = new THREE.Color(0xfcdc04);
    const yellow5 = new THREE.Color(0xfcf404);
    const yellow6 = new THREE.Color(0xfcd40c);
    const yellow7 = new THREE.Color(0xffd404);
    const yellow8 = new THREE.Color(0xffd404);
    const yellow9 = new THREE.Color(0xffd404);
    const purple = new THREE.Color(0x9404ec);
    const purple1 = new THREE.Color(0x8c04e4);
    const purple2 = new THREE.Color(0x9404e4);
    const purple3 = new THREE.Color(0x8c04dc);
    const purple4 = new THREE.Color(0x9804ec);
    const purple5 = new THREE.Color(0x9004e4);
    const purple6 = new THREE.Color(0x5c1c64);
    const purple7 = new THREE.Color(0x7906bc);
    const purple8 = new THREE.Color(0x64147c);
    const purple9 = new THREE.Color(0x5c206c);
    const purple10 = new THREE.Color(0x70106c);
    const purple11 = new THREE.Color(0x5c206c);


    const colors = [  
        { name: 'red', color: red1 },
        { name: 'red', color: red2 },
        { name: 'red', color: red3 },
        { name: 'red', color: red4 },
        { name: 'red', color: red5 },
        { name: 'red', color: red6 },
        { name: 'red', color: red7 },
        { name: 'red', color: red8 },
        { name: 'red', color: red9 },
        { name: 'blue', color: blue1 },
        { name: 'blue', color: blue2 },
        { name: 'blue', color: blue3 },
        { name: 'blue', color: blue4 },
        { name: 'blue', color: blue5 },
        { name: 'blue', color: blue6 },
        { name: 'blue', color: blue7 },
        { name: 'blue', color: blue8 },
        { name: 'blue', color: blue9 },
        { name: 'green', color: green1 },
        { name: 'green', color: green2 },
        { name: 'green', color: green3 },
        { name: 'green', color: green4 },
        { name: 'green', color: green5 },
        { name: 'green', color: green6 },
        { name: 'green', color: green7 },
        { name: 'green', color: green8 },
        { name: 'green', color: green9 },
        { name: 'yellow', color: yellow1 },
        { name: 'yellow', color: yellow2 },
        { name: 'yellow', color: yellow3 },
        { name: 'yellow', color: yellow4 },
        { name: 'yellow', color: yellow5 },
        { name: 'yellow', color: yellow6 },
        { name: 'yellow', color: yellow7 },
        { name: 'yellow', color: yellow8 },
        { name: 'yellow', color: yellow9 },
        { name: 'purple', color: purple },
        { name: 'purple', color: purple1 },
        { name: 'purple', color: purple2 },
        { name: 'purple', color: purple3 },
        { name: 'purple', color: purple4 },
        { name: 'purple', color: purple5 },
        { name: 'purple', color: purple6 },
        { name: 'purple', color: purple7 },
        { name: 'purple', color: purple8 },
        { name: 'purple', color: purple9 },
        { name: 'purple', color: purple10 },
        { name: 'purple', color: purple11 }
    ];
    let closestColor = 'unknown';
    let minDistance = Infinity;

    colors.forEach(({ name, color: targetColor }) => {
        const distance = colorDistance(color, targetColor);
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = name;
        }
    });

    return closestColor;
}
function showModal(message, imageSrc) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const modalImage = document.getElementById('modal-image');
    modalMessage.innerHTML = message; 
    modalImage.src = imageSrc;
    modal.style.display = 'block';
}


function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function getPixelColor(x, y) {
    const pixelBuffer = new Uint8Array(4);
    renderer.readRenderTargetPixels(renderTarget, x, y, 1, 1, pixelBuffer);
    return new THREE.Color(pixelBuffer[0] / 255, pixelBuffer[1] / 255, pixelBuffer[2] / 255);
}

renderer.domElement.addEventListener('click', function(event) {
    console.log("Click detected at:", event.clientX, event.clientY);
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    renderer.setRenderTarget(renderTarget);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);

    const pixelColor = getPixelColor(event.clientX, window.innerHeight - event.clientY);
    const detectedColor = approximateColor(pixelColor);

    console.log("Intersected object color:", detectedColor);
    if (detectedColor === 'red') {
        showModal('Adenine is one of the four nucleobases in RNA, represented by the color red. In RNA, adenine pairs with uracil (yellow) through two hydrogen bonds. Adenine is a purine base, meaning it has a double-ring structure consisting of a six-membered ring fused to a five-membered ring.', './ad.png');
    } else if (detectedColor === 'blue') {
        showModal('Guanine is one of the four nucleobases in RNA, represented by the color blue. In RNA, guanine pairs with cytosine (green) through three hydrogen bonds, contributing to the stability of the RNA structure. Like adenine, guanine is a purine base with a double-ring structure.', './g.png');
    } else if (detectedColor === 'green') {
        showModal('Cytosine is one of the four nucleobases in RNA, represented by the color green. In RNA, cytosine pairs with guanine (blue) through three hydrogen bonds, helping to stabilize the RNA structure. Cytosine is a pyrimidine base, meaning it has a single-ring structure composed of a six-membered ring.', './c.png');
    } else if (detectedColor === 'yellow') {
        showModal('Uracil is one of the four nucleobases in RNA, represented by the color yellow. In RNA, uracil pairs with adenine (red) through two hydrogen bonds, forming part of the RNA structure. Uracil is a pyrimidine base, meaning it has a single-ring structure composed of a six-membered ring.', './u.png');
    } else if (detectedColor === 'purple') {
        showModal('<p style="margin-bottom: 16px;">Nucleoside is a nitrogenous base attached to a sugar molecule.</p><p style="margin-bottom: 16px;">Sugar-Phosphate Backbone:  The nucleotide molecule forms an ester bond when the nucleoside attaches to the phosphate group and continues to attach to neighboring sugar molecule attached to the nucleotide.</p><p style="margin-bottom: 16px;">Phosphodiester Bonds: The 3’-hydroxyl group of one nucleotide’s ribose sugar reacts with the phosphate group attached to the 5’-carbon of another nucleotide.</p>', './pl.jpg');

    } else {
        console.log("Unknown color:", pixelColor.getHexString());
    }
});

document.getElementById('close-modal').addEventListener('click', hideModal);

let model;
const loader = new THREE.GLTFLoader();
loader.load(
    './rna-project-45.glb', 
    function (gltf) {
        model = gltf.scene;
        model.scale.set(10, 10, 10); 
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center); 
        scene.add(model);
        console.log('GLB model loaded and centered successfully!');
    },
    function (xhr) {
        console.log('Model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error happened during the loading process:', error);
    }
);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);

function render() {
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.y += 0.001; 
    }
    render();
}
animate();
