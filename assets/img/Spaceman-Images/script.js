/*----- constants -----*/
const SPRITE_WIDTH = 504;

/*----- state variables -----*/
let curFrame;

/*----- cached elements  -----*/
const imgEl = document.querySelector('img');
const filmstripEl = document.getElementById('spaceman-filmstrip');
const btnEls = [...document.querySelectorAll('#btns-container > button')];

/*----- event listeners -----*/
document.getElementById('btns-container').addEventListener('click', handleBtnClick);

/*----- functions -----*/
init();

function init() {
  curFrame = 0;  // Show whole spaceman
  render();
}

function render() {
  imgEl.src = `imgs/spaceman-${curFrame}.jpg`;
  filmstripEl.style.backgroundPosition = `-${SPRITE_WIDTH * (6 - curFrame)}px`;
  btnEls.forEach(function(btn) {
    btn.disabled = false;
    btn.style.backgroundColor = 'white';
  });
  btnEls[curFrame].disabled = true;
  btnEls[curFrame].style.backgroundColor = 'palegreen';
}

function handleBtnClick(evt) {
  const btn = evt.target;
  // Ensure that a button was clicked
  if (!btnEls.includes(btn)) return;
  curFrame = parseInt(btn.textContent);
  render();
}