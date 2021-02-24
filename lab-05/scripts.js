console.log("Hello World");

"use strict";

myHeight.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});
