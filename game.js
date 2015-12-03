var input = prompt('What is your name?');
alert('Nice to meet you '+ input);

var count=0;

var input1 = prompt ('Is Catherine from Singapore?(Y/N)');
input1 = input1.toLowerCase();
if (input1 == "y") {
  count = count +1;
  alert('Yes, Catherine is from Singapore!');
} else {
  alert ('Oops...Catherine is from Singapore!');
}

var input2 = prompt ('Is Catherine Chinese?(Y/N)');
input2 = input2.toLowerCase();
if(input2 == "y") {
  count = count +1;
  alert('Yes, Catherine is Chinese!');
} else {
  alert ('Oops...Catherine is Chinese!');
}

var input3 = prompt ('Is Catherine female?(Y/N')
input3 = input3.toLowerCase();
if(input3 == "y"){
  count = count +1;
  alert('Yes, Catherine is female!');
} else {
  alert ('Oops...Catherine is female!');
}

alert("You've got "+ count + " question(s) correct!");


var input4 = parseInt(prompt('Guess a number between 1 to 9?'));

while (input4 !== 7){
  if(input4 < 7){
    input4 = parseInt(prompt('Thats not it, try going higher?'));
  } else if (input4>7){
    input4 = parseInt(prompt('Thats not it, try going lower?'));
  }
}
alert('Bingo!');

var array = ['a','b','c']
var correct = false;

while (correct !== true){
  var guess = prompt('Pick a letter from a to c').toLowerCase();
  for (var i=0; i<array.length; i++){
    if(guess === array[i]){
      correct = true;
    }
  }
}
alert('Bingo!')
