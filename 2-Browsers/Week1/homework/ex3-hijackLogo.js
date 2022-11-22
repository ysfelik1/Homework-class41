'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  //added in settings.json but giving test error???
  const elLogo = document.getElementsByTagName('img');
  if (elLogo !== null) {
    for (let i = 0; i < elLogo.length; i++) {
      if (elLogo[i].alt === 'Google') {
        elLogo[i].src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
        elLogo[i].srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
      }
    }
  }
}

hijackGoogleLogo();
