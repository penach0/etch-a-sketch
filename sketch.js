const container = document.getElementById('container');
let lines = [];
let squares = [];
let initialSize = 16;

function createGrid(gridSize){
    clearGrid();
    if(gridSize != initialSize) gridSize = askSize();
    for(let i = 0; i < gridSize; i++){
        lines[i] = document.createElement('div');
        lines[i].classList.add('line');
        container.appendChild(lines[i]);
        for(let j = 0; j < gridSize; j++){
            squares[j] = document.createElement('div');
            squares[j].classList.add('square');
            lines[i].appendChild(squares[j]);
            }
        }
    squares = [...document.getElementsByClassName('square')];
    squares.forEach((square) => square.addEventListener('mouseover', () => square.classList.add('colored')));
    
}

function clearGrid() {
    container.replaceChildren();
}

function askSize(){
    let size = 81;
    while(size > 80 || isNaN(size) ) {
        size = +prompt("Please enter the size (max: 80): ");
        if(isNaN(size)) {
            alert("Please enter a number!!");
            continue;
        }else return(size);
    };
    
}

createGrid(initialSize);



const button = document.getElementById('button');
button.addEventListener('click', createGrid);

