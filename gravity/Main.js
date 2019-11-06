var canvas=document.querySelector("canvas");
canvas.height=420;
canvas.width=400;
var c=canvas.getContext("2d");
var m=1;
var x=100;
var y=100;
var r=10;
var dx=0;
var dy=0;
var ax=0*m;
var ay=0.5*m;
var f=0.8;
var count=0
function gravity(){
c.clearRect(0,0,400,420);
if(count==5)
{
dy=0;
ay=0;
}
if (y >=420-r || y<=-r)
{
dy=-dy*f;
count++;

}
if(x>=400-r || x<=-r)
{
dx=-dx*f
}
c.beginPath();
c.fillStyle="red"
c.arc(x,y,r,Math.PI*2,false);
c.fill();
x+=dx;
y+=dy;
dx+=ax;
dy+=ay;
requestAnimationFrame(gravity);
}
gravity();



