$(document).ready(gameLoop);

function circle (x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius 0, Math.PI * 2, false);
    ctx.stroke();
}

var drawPacMan = function(x, y, speed) {
    var x = x;
    var y = y;
    var speed = speed;
    ctx.strokeStyle = "yellow";
    circle(x, y, 40);
}

function gameLoop() {
    drawPacMan(100, 100, 10);
}