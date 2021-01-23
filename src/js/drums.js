console.log('hello another');
let clap = document.querySelector('.clap')
console.log(clap);
import '../scss/main.scss';

function playSound(e) {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return; //stop playing all together
audio.currentTime = 0; // allow to play sounds multiple times
audio.play(); // stops function form runing
key.classList.add('playing');
}
function removeTransition(e) {
if( e.propertyName !== 'transform') return;
this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key');
keys.forEach(   key =>  key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown' , playSound) ;

/*  1.widnow.eventListner - nasłuchuje akcji "keydown"
    2.pobieramy slektory plików audio i przypisanym mu 'kaycodem'
    3.  if(!audio) return;  blokujemy odtwarzanie wszyskich dziwęków naraz
    4.       nadajemy audio funkcje .play()
    5.      za pomocą classList dodajemy klasy posiadające animacje
    6.  pobieramy atrybut odpowiedzialny za czas trwania animacji
    7.usuwamy klasę
    8.usuwamy animację


*/