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
  const elLogo = document.querySelector('lnXdpd');
  const elLogoSrc = document.querySelector('jfN4p');

  if (elLogo !== null) {
    elLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
    elLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  }
  if (elLogoSrc !== null) {
    elLogoSrc.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
    elLogoSrc.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  }
}

hijackGoogleLogo();
