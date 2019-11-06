var canvas=document.querySelector("canvas");
canvas.height=420;
canvas.width=400;
var c=canvas.getContext("2d");
var x=100;
var y=100;
var r=20;
c.beginPath();
c.moveTo(0,0);
c.lineTo(21,21);
c.stroke();
c.strokeRect(33,33,10,10);
//c.stroke();
c.beginPath();
c.fillStyle="red";
c.arc(100,100,20,Math.PI*2,false);
c.fill();
c.fillStyle="white";
c.fillRect(0,0,400,420);
//c.clearRect();
function bla(){
c.clearRect(0,0,400,420);
c.beginPath();
c.fillStyle="red";
c.arc(x,y,Math.abs(Math.sin(x)*100),Math.PI*2,false);
c.fill();
x+=0.1;
requestAnimationFrame(bla);}
bla();
