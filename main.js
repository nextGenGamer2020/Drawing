var mouseEvent = "empty"
var last_position_of_X, last_position_of_Y
var current_position_of_mouse_x, current_position_of_mouse_y

canvas = document.getElementById("myCanvas")
color = "red";
ctx = canvas.getContext("2d")
width_of_the_line = 2

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{


//color = document.getElementById("color").value;
//width_of_the_line = document.getElementById
mouseEvent = "mouseDown";


}


canvas.addEventListener("mouseLeave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";


}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;

        console.log("Last position of x and y coordinates = ");
        console.log(" x = " + last_position_of_X + " y = "+ last_position_of_Y);
        ctx.moveTo(last_position_of_X, last_position_of_Y);

        console.log("Current position of x and y coordinates = ");
        console.log(" x= "  + current_position_of_mouse_x+ " y= " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);


    }

    last_position_of_X = current_position_of_mouse_x;
    last_position_of_Y = current_position_of_mouse_y;
}
