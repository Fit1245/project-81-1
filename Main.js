canvas = document.getElementById("Canvas_1");
ctx= canvas.getContext("2d");

ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(mouse_x,mouse_y,40,0,2 * Math.PI);

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{

  mouse_x = e.clientX - canvas.offsetLeft;
  mouse_y = e.clientY - canvas.offsetTop;
  circle(mouse_x , mouse_y);  
}
function circle(mouse_x , mouse_y)
{
    ctx.beginPath ();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.arc(mouse_x,mouse_y,40,0,2 * Math.PI);
    ctx.stroke();    
}
