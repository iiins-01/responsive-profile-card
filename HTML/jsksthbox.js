function createBox() {
    let div = document.createElement("div");
    div.className = "box";
    div.innerHTML = "New Box Created!";
    document.getElementById("main").appendChild(div);
}