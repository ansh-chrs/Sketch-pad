const canvas = document.querySelector('.innerContainer');
const colorInput = document.querySelector('.color');
const resetbtn = document.querySelector('.reset');
const mixBtn = document.querySelector('.mixNmatch');
const eraseBtn = document.querySelector('.eraser');
const gridSize = document.querySelector('.gridSize');
let clickState;
let penState = '';

let penColor = colorInput.value;
colorInput.addEventListener('input', () => {
  penColor = colorInput.value;
  penState='';
});

gridSize.addEventListener('input', gridGenerator);
window.addEventListener('load',gridGenerator);
document.addEventListener('mousedown', () => { clickState = 1 })
document.addEventListener('mouseup', () => { clickState = 0 })

function gridGenerator() {
  if (canvas.hasChildNodes) {
    canvas.innerHTML = '';
  }
  penState = '';
  clickState = 0;
  let count = gridSize.value;
      for (let i = 1; i <= count; i++) {
        let row = document.createElement('div');
        row.style.display = `flex`;

              for (let j = 1; j <= count; j++) {
                let grid = document.createElement('div');
                grid.classList.add('pixels');
                grid.style.flex = "1";
                grid.style.border = `1px solid white`;
                resetbtn.addEventListener('click', () => { grid.style.backgroundColor = `black`, penState = ''; });

                grid.addEventListener("dragstart", (event) => {
                  event.preventDefault();   //Prevents pointer from dragging element on longer press
                });

                grid.addEventListener('mousedown', (e) => {
                  clickState = 1;
                  painter(e);
                });
                grid.addEventListener('mouseover', painter);
                row.appendChild(grid);
              }
              
        canvas.appendChild(row);
        row.style.flex = '1';

      }
}



mixBtn.addEventListener('click', () => { penState = mixBtn.value; });
eraseBtn.addEventListener('click', () => { penState = eraseBtn.value; });

function painter(e) {

  if (clickState) {

    if (penState === 'rainbow') {
      e.target.style.backgroundColor = rainbowMaker();

    }

    else if (penState === 'eraser') {

      e.target.style.backgroundColor = `black`;

    }

    else {
      e.target.style.backgroundColor = `${penColor}`;
    }
  }
}


function rainbowMaker() {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  return colorCode;
}



