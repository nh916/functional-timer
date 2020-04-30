/*
@fileOverview This is a simple timer written in pure JavaScript ES6 or ES 2015
*/
let thisTime;
let theInterval;
let ID;
// let its0;

/* sets the amount of thisTime and adds 1 to it
for the user to see that it started from 30 and not 29
@param {timer} num The amount the timer should run for
@return null/none
*/
function setTimer(timer) {
  thisTime = timer + 1;
}

// sets Id
function setID(idGiven) {
  ID = idGiven;
}

/* uses the id from global var
 subtracts one from the given timer
 then replaces the id
 once it hits 0 it stops */

function timeIt() {
  thisTime--;
  const timer = document.getElementById(ID);
  timer.innerText = thisTime.toString();

  if (thisTime === 0) {
    clearInterval(theInterval);
  }
}

function stopAndClear() {
  const currentTimer = document.getElementById(ID);
  currentTimer.innerText = '';
  clearInterval(theInterval);
}


/* starts the timer
Takes the amount that the developer wants the timer to run for
takes the ID that the developer wants to put the timer inside of
when the timer hits 0 it stops itself */

function startTimer(amount, id = 'timer') {
  setTimer(amount);
  setID(id);
  timeIt();
  theInterval = setInterval(timeIt, 1000);
}

// converts seconds to minutes. For example 65 seconds to 1:05
function convertSeconds(theSeconds) {
  const min = Math.floor(theSeconds / 60);
  const seconds = theSeconds % 60;

  if (min > 1 && seconds < 10) {
    return min + ':' + '0' + seconds;
  } else {
    return seconds;
  }

  // else if (min > 1 && seconds ) {
  //     return min + ':' + seconds;
  // }
}

/* pauses the clock on the second that its said
checks every second to see if its at the pausing point
and once it is it clears the interval */

function pause(pointToPause) {
  setInterval(function() {
    pausing(pointToPause);
  }, 1000);

  if (thisTime === pointToPause) {
    clearInterval(theInterval);
  }
}
