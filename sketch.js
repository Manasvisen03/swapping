

var a = prompt('Enter the first variable: ');
var b = prompt('Please enter the second variable')
function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swapped)
  }


function draw()
{
}
function swapped(){
  [a,b]=[b,a]
console.log("new value of a"+a)
console.log("new value of b"+b)
}