var x=100;
var y=150;

function pos(dx,dy) {
    if(!document.getElementById) return;
    x += dx;
    y += dy;
    var obj = document.getElementById("square");
    obj.style.top=y + "px";
    obj.style.left=x+ "px";
}

function hideSquare() {
    if(!document.getElementById) return;
    var obj= document.getElementById("square");
    obj.style.display="none";
}

function showSquare() {
    if(!document.getElementById) return;
    var obj = document.getElementById("square");
    obj.style.display="block";
}