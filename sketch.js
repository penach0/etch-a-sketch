const container = document.getElementById('container');
let lines = [];
let squares = [];
let initialSize = 16;
let choice = 'single';

createGrid(initialSize);

const button = document.getElementById('button');
button.addEventListener('click', createGrid);

const selectElement = document.getElementById('select');
selectElement.addEventListener('change', dropdownChoice);

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
            squares[j].style.backgroundColor = 'rgb(255,255,255)';
            lines[i].appendChild(squares[j]);
            }
        }
    squares = [...document.getElementsByClassName('square')];

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

function blackGradient(rgbString){
    let rgbValue = rgbString.match(/\d+/);
    if (rgbValue === '0') return;
    rgbValue = rgbValue - 255/10;
    return(rgbString.replaceAll(/\d+/g, rgbValue));
}

function dropdownChoice(e){
    choice = e.target.value;

    if(choice === 'single') {
        squares.forEach((square) => square.addEventListener('mouseover', () => square.style.backgroundColor = 'blueviolet'));
    }
    if(choice === 'random') {
        squares.forEach((square) => square.addEventListener('mouseover', () => square.style.backgroundColor = randomColor()));
    }
    if(choice === 'gradient') {
        squares.forEach((square) =>
            square.addEventListener('mouseover', () => square.style.backgroundColor = blackGradient(square.style.backgroundColor)));
        };
}