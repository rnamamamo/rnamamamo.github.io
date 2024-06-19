<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - 3D RNA Biology</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="navbar">
        <img src="./l.png" alt="RNA Logo">
    </div>

    <div class="container">
        <div class="team-section">
            <h1>Meet Our Team</h1>
            <div class="team-grid">
                <div class="team-card">Agustin, Kristine Leigh Angelie</div>
                <div class="team-card">Coloma, Jezreel Jayne</div>
                <div class="team-card">Dagupion, Jocel Garcia</div>
                <div class="team-card">Lino, Mark Joseph</div>
                <div class="team-card">Pascua, Missy</div>
                <div class="team-card">Santos, Makyla Danielle</div>
                <div class="team-card">Tugas, Czarine Leigh</div>
            </div>
        </div>
        
        <div class="acknowledgment-section">
            <h1>Acknowledgment</h1>
            <p>We would like to express our sincere gratitude to everyone who helped us in developing this 3D RNA model. Special thanks to:</p>
            <ul>
                <li>Engr. Jennifel Marisse Asuncion for her guidance and support.</li>
                <li>Engr. Paulito Louie Fermin for his original 3D model created using Blender.  </li>
             
            </ul>
            <p> Also to our BIO141 Genetics professor, Dr. Peter James Gann. </p>
        </div>
    </div>
    
    <footer class="footer">
        <div class="footer-content">
            <a href="index.php">RNA 3D Model</a>
            <p>Copyright © 2024 by BS BIO 2A</p>
        </div>
    </footer>
</body>
</html>
<style>
body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
}

.container {
    padding: 20px;
    text-align: center;
}

.team-section h1, .acknowledgment-section h1 {
    color: #fff;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.team-card {
    background-color: #444;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease-in-out;
}

.team-card:hover {
    transform: translateY(-5px);
}

.acknowledgment-section {
    padding: 20px;
    background-color: #333;
    margin-top: 40px;
    border-radius: 5px;
    height: 500px;
}

.acknowledgment-section ul {
    text-align: left;
    display: inline-block;
    margin: 0 auto;
    padding: 0;
    list-style: none;
}

.acknowledgment-section ul li {
    margin: 5px 0;
}
</style>
