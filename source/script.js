/* global setAnswer, fieldProperties, getPluginParameter, $ */
var head = getPluginParameter('head') // Title for head result
var tail = getPluginParameter('tail') // Title for tail result
var flipResult = getPluginParameter('random') // Random number
var head_p = getPluginParameter('head_p') // Probablity of head
var currentAnswer = fieldProperties.CURRENT_ANSWER 

/* Probability calculation */
if (head_p = '') {
    var head_p = .5
}
else {
  var head_p = Number(head_p)
}

var tail_p = 1 - .5

/* Store all filp results */
var metadata = getMetaData() // To store all the results in metadata
if (metadata == null) {
  metadata = ''
}

function clearAnswer() {
  input.value = '';
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}



/*-- Coin flip annimation --*/

let coin = document.getElementById("coin");


coin.addEventListener("click", fnClick);

var block = 0;

function fnClick() {
    if (flipResult = '') {
      var flipResult = Math.random();
    }
    else {
      var flipResult = Number(flipResult)
    }
    
    if (flipResult < head_p && block === 0) {
        coin.className = "flipHead";
        sleep(5000).then(() => {
            /* Store data */
            setMetaData(metadata + "|" + flipResult  + "|" + head)
            setAnswer(head)
            document.getElementById("result").innerHTML = head;
            ++block
        });

    } else if (flipResult >= tail_p && block === 0) {
        coin.className = "flipTail";
        sleep(5000).then(() => {
            /* Store data */
            setMetaData(metadata + "|" + flipResult  + "|" + tail)
            setAnswer(tail)
            document.getElementById("result").innerHTML = tail;
            ++block
        });
    }
}

