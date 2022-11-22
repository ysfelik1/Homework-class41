'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const newDiv = document.createElement('div');
  const newP = document.createElement('p');
  newP.textContent = 'loading...';
  //Time formatting solution from https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss

  function checkTime(i) {
    //adds zero if parameter<10
    return i < 10 ? '0' + i : i;
  }
  //gets hour minute and second of current date and sets text of 'p' element
  function startTime() {
    const today = new Date(),
      h = checkTime(today.getHours()),
      m = checkTime(today.getMinutes()),
      s = checkTime(today.getSeconds());
    newP.textContent = h + ':' + m + ':' + s;
    console.log(newP.textContent);
  }

  newP.style.fontSize = '2rem';
  newP.style.margin = '0';

  newDiv.style.border = ' 5px solid';
  newDiv.style.textAlign = 'center';
  newDiv.style.width = '40vw';
  newDiv.style.height = '35px';
  //centering div
  newDiv.style.margin = 'auto';
  newDiv.style.top = '0';
  newDiv.style.left = '0';
  newDiv.style.right = '0';
  newDiv.style.bottom = '0';
  newDiv.style.position = 'absolute';

  newDiv.appendChild(newP);
  document.body.appendChild(newDiv);
  //works every second to get realtime
  window.setInterval(startTime, 1000);
}

window.addEventListener('load', addCurrentTime);
