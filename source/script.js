/* global setAnswer, fieldProperties, getPluginParameter, $ */
var head = getPluginParameter('head') // Title for head result
var tail = getPluginParameter('tail') // Title for tail result

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


function fnClick() {
    var flipResult = Math.random();
    if (flipResult < 0.5) {
        coin.className = "flipHead";
        sleep(5000).then(() => {
            /* Store data */
            setMetaData(metadata + "|" + head)
            setAnswer(head)
            document.getElementById("result").innerHTML = head;
            
        });

    } else {
        coin.className = "flipTail";
        sleep(5000).then(() => {
            /* Store data */
            setMetaData(metadata + "|" + tail)
            setAnswer(tail)
            document.getElementById("result").innerHTML = tail;
            
        });
    }
}

