<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D RNA Biology</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="navbar">
        <img src="./l.png" alt="RNA Logo">
    </div>

    <div class="container">
        <div id="model-viewer"></div>
        <d class="cards-container">
            <div class="card" id="card-1">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="./p.png" alt="Image 1">
                        <p>Purine</p>
                    </div>
                    <div class="card-back">
                        <p>
Purines have a double-ring structure consisting of a six-membered ring fused to a five-membered ring. The two purines found in DNA and RNA are adenine (red) and guanine (blue). These nitrogenous bases are essential for the formation of hydrogen bonds between complementary base pairs, which help stabilize the double helix structure of DNA.</p>
                    </div>
                </div>
            </div>
            
            <div class="card" id="card-2">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="./py.png" alt="Image 1">
                        <p>Pyrimidine</p>
                    </div>
                    <div class="card-back">
                        <p>
Pyrimidines have a single-ring structure consisting of a six-membered ring. The three pyrimidines found in DNA are cytosine (green) and thymine, and in RNA is uracil (yellow), which replaces thymine. The nitrogenous base pairing rules dictate that adenine pairs with thymine (or uracil in RNA) and cytosine pairs with guanine.</p>
                    </div>
                </div>
            </div>


            <div class="card" id="card-3">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="./i.png" alt="Image 1">
                        <p>Instructions</p>
                    </div>
                    <div class="card-back">
                    
    <p class="spaced-paragraph" style=" font-size: 10px;">1.To explore the model: right-click drag to move the model around, pinch to zoom in and out, and left-click drag to change perspective.</p>
    <p class="spaced-paragraph"style=" font-size: 10px;">2.To view the nitrogenous bases and the backbone, zoom in and click the bases and the RNA backbone.</p>
    <p class="spaced-paragraph"style=" font-size: 10px;">3.To view the description of Purines and Pyrimidines, click the images at the right-hand side.</p>
                    </div>
                </div>
            </div>
            
            
    <div id="modal">
        <p id="modal-message"></p>
        <img id="modal-image" src="" alt="Color image">
        <span id="close-modal">Close</span>
    </div>
    <footer class="footer">
    <div class="footer-content">
        <a href="about_us.php">About Us</a>
        <p>Copyright © 2024 by BS BIO 2A</p>
    </div>
</footer>

    <script src="./three.min.js"></script>
    <script src="./GLTFLoader.js"></script>
    <script src="./OrbitControls.js"></script>
    <script src="app.js"></script>
</body>
</html>
<style>
    .space_paragraph{
    margin: 0;
    padding: 0;
    line-height: 1.2; 
    word-break: break-word;
    }
  
</style>