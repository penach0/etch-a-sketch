const container = document.getElementById('container');
let lines = [];
let squares = [];
let initialSize = 16;

createGrid(initialSize);

const button = document.getElementById('button');
button.addEventListener('click', createGrid);



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
    //squares.forEach((square) => square.addEventListener('mouseover', () => square.classList.add('colored')));
    squares.forEach((square) => square.addEventListener('mouseover', () => square.style.backgroundColor = randomColor()));
    
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
        } 
    }
    return(size);
}

function randomColor(){
    let rgb = [];
    for(let i = 0; i < 3; i++){
        rgb[i] = Math.floor(Math.random() * 256);
    }

    return(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`)
}