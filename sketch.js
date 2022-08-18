const container = document.getElementById('container');
let lines = [];
let squares = [];

for(let i = 0; i < 16; i++){
    lines[i] = document.createElement('div');
    lines[i].classList.add('line');
    container.appendChild(lines[i]);
    for(let j = 0; j < 16; j++){
        squares[j] = document.createElement('div');
        squares[j].classList.add('square');
        lines[i].appendChild(squares[j]);
        }
    }

squares = [...document.getElementsByClassName('square')];

squares.forEach((square) => square.addEventListener('mouseover', () => square.classList.add('colored')));