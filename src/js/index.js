import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

window.addEventListener('keydown' , function(e)  {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
if(!audio) return; //stop playing all together
audio.play()

})