const canvas = document.querySelector('.innerContainer');
const colorInput = document.querySelector('.color');
let penColor = colorInput.value;
colorInput.addEventListener('input', ()=> {
  penColor = colorInput.value;
});


let count =10;
let clickState;

for (let i = 1; i <= count; i++) {
  let row = document.createElement('div');
  row.style.display = `flex`;

        for (let j = 1; j <= count; j++) {
          let grid = document.createElement('div');
          grid.style.border = "1px solid white";
          grid.style.flex = `1`;
          addEventListener("dragstart", (event) => {
            event.preventDefault();   //Prevents pointer from dragging element on longer press
          });

          grid.addEventListener('mousedown', (e) => {
            clickState = 1;
            painter(e);
          });

          grid.addEventListener('mouseup', () => { clickState = 0; });
          grid.addEventListener('mouseover', painter);
          row.appendChild(grid);
        }
  canvas.appendChild(row);
  row.style.flex = '1';

}



function painter(e) {

  if (clickState) { e.target.style.backgroundColor =`${penColor}` };

}