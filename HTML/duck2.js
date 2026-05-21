module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Assignment</title>

    <style>
        h1 {
            text-align: center;
        }
        img {
            width: 250px;
        }
        button {
            margin: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1 id="heading">BELLA CIAO!</h1>
    <button onclick="changeTextColor()">heading wala clr</button>
    <button onclick="changeBackgroundColor()">Change Background Color</button>
    <img id="myImage" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d/300/200" alt="Sample Image" />
    <button onclick="increaseImageSize()">Increase Image Size</button>
    <button onclick="addBorder()">Add Border</button>
    <script>
        function changeTextColor(){
            document.getElementById("heading").style.color = "blue";
        }
        function changeBackgroundColor(){
            document.body.style.backgroundColor = "lightyellow";
        }
        function increaseImageSize(){
            document.getElementById("myImage").style.width = "350px";
        }
        function addBorder(){
            document.getElementById("myImage").style.border = "5px solid red";
        }
    </script>
</body>
</html>`;