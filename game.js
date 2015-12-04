// var input = prompt('What is your name?');
// alert('Nice to meet you '+ input);

var count=0;

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');

//shortcut "geti"

function qn1(){
var input1 = prompt ('Is Catherine from Singapore?(Y/N)');
input1 = input1.toLowerCase();
if (input1 == "y") {
  count = count +1;
  one.textContent = "Yes, Catherine is from Singapore!";
  one.className = "right";
} else {
  one.textContent = 'Oops...Catherine is from Singapore!';
  one.className = "wrong";
}
}

function qn2(){
var input2 = prompt ('Is Catherine Chinese?(Y/N)');
input2 = input2.toLowerCase();
if(input2 == "y") {
  count = count +1;
  two.textContent = 'Yes, Catherine is Chinese!';
  two.className = "right";
} else {
  two.textContent = 'Oops...Catherine is Chinese!';
  two.className = "wrong";
}
}

function qn3(){
var input3 = prompt ('Is Catherine female?(Y/N')
input3 = input3.toLowerCase();
if(input3 == "y"){
  count = count +1;
  three.textContent='Yes, Catherine is female!';
  three.className = "right";
} else {
  three.textContent = 'Oops...Catherine is female!';
  three.className = "wrong";
}
}


function qn4(){
var input4 = parseInt(prompt('Guess a number between 1 to 9?'));

while (input4 !== 7){
  if(input4 < 7){
    input4 = parseInt(prompt('Thats not it, try going higher?'));
  } else if (input4>7){
    input4 = parseInt(prompt('Thats not it, try going lower?'));
  }
}
four.textContent='7';
four.className = "right";
}

function qn5(){
var array = ['a','b','c']
var correct = false;

while (correct !== true){
  var input5 = prompt('Pick a letter from a to c').toLowerCase();
  for (var i=0; i<array.length; i++){
    if(input5 === array[i]){
      correct = true;
    }
  }
}
five.textContent='a/b/c';
five.className = "right"
}

qn1();
qn2();
qn3();
alert("You've got "+ count + " question(s) correct!");
qn4();
qn5()


// var sectionEl = document.getElementbyId('test'); ----> JS
// sectionEl.className = 'wrong'; ---> JS
// <section id="test"> ---> in HTML
//
