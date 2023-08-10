const canvas = document.querySelector('.innerContainer');

let count = 10;



for(let i = 1; i <= count ; i++ )
{
    let row =document.createElement('div');
    row.style.display =  `flex`;
    for(let j = 1; j <= count ; j++ )
 {
   let grid = document.createElement('div');
   grid.style.border = "1px solid white";
   grid.style.flex = `1`;

   grid.addEventListener('mouseover',changer)
   row.appendChild(grid);
 }
 canvas.appendChild(row);
  row.style.flex = '1';
}

function changer(e)
{
  e.target.classList.add('hoverEvent');
}

