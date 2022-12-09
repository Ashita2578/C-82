var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "Blue";
Width_of_line = 9;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    Width_of_line = document.getElementById("Width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    var current_mouse_x = e.clientX - canvas.offsetLeft;
    var current_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("Current Position Of X And Y Coordinates = ");
        console.log("X = " + current_mouse_x + ",Y = " + current_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Width_of_line;
        ctx.arc(current_mouse_x, current_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function Clear_drawing() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
