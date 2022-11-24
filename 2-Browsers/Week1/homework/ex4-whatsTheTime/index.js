'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const divContent = document.createElement('div');
  const pTime = document.createElement('p');
  pTime.textContent = 'loading...';
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
    pTime.textContent = h + ':' + m + ':' + s;
    console.log(pTime.textContent);
  }

  pTime.style.fontSize = '2rem';
  pTime.style.margin = '0';

  divContent.style.border = ' 5px solid';
  divContent.style.textAlign = 'center';
  divContent.style.width = '40vw';
  divContent.style.height = '35px';
  //centering div
  divContent.style.margin = 'auto';
  divContent.style.top = '0';
  divContent.style.left = '0';
  divContent.style.right = '0';
  divContent.style.bottom = '0';
  divContent.style.position = 'absolute';

  divContent.appendChild(pTime);
  document.body.appendChild(divContent);
  //works every second to get realtime
  window.setInterval(startTime, 1000);
}

window.addEventListener('load', addCurrentTime);
