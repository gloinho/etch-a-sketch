// Calculating square size without changing the amount of pixels of de div (grid-container (500x500))
function squareSize(size){
    let sqsize = 450/size;
    return sqsize;
};

function currentMode(mode){
    const currentmode = document.getElementById('currentmode')
    currentmode.textContent = mode
};

function firstDivs(){
    currentMode('No mode selected!')
    const grid = document.querySelector('#grid')
    const gridsize = changeGrid()
    for (i=1; i<=gridsize**2; i++){
        let div = document.createElement('div')
        div.classList.add('square')
        grid.appendChild(div)
    }
    const newsqsize = squareSize(gridsize)
    grid.style.gridTemplateColumns = `repeat(${gridsize}, ${newsqsize}px)`;
    grid.style.gridTemplateRows = `repeat(${gridsize}, ${newsqsize}px)`;
    const blackdiv = document.querySelectorAll('.square');
    blackdiv.forEach(div => div.addEventListener('mouseover', () => {div.style.background = 'black'}));
};

let body = document.getElementById('body')
body.addEventListener('load', firstDivs(), {once:true})


function randomColor(){
    let r = Math.floor(Math.random()*(255));
    let g = Math.floor(Math.random()*(255));
    let b = Math.floor(Math.random()*(255));
    return `rgb(${r}, ${g}, ${b})`;
};

const buttonrainbow = document.getElementById('rainbow')
buttonrainbow.addEventListener('click', () => {
    clearDraw()
    changeGrid()
    currentMode('Rainbow mode selected!')
    let divs = document.querySelectorAll('.square');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.background= randomColor()}, {once:true}))
    divs.forEach(div => div.removeEventListener('mouseover', () => {
        div.style.background= randomColor()}))
    divs.forEach(div => div.addEventListener('mouseover', () => {
        let newbd ='rgb('
        let bdcolor = div.style.background.split('').filter(n => (Number(n)|| n == 0)).join('').split(' ')
        for(i=0; i<3; i++) {
            if (i===2) {
                newbd += `${Math.round(bdcolor[i]*0.9)})`
            }
            else {newbd += `${Math.round(bdcolor[i]*0.9)},`}
        }
        div.style.background = newbd
    }))
 });

let blackmode = document.getElementById('black')
blackmode.addEventListener('click', () => {
    clearDraw()
    changeGrid()
    currentMode('Black mode selected!')
    const blackdiv = document.querySelectorAll('.square');
    blackdiv.forEach(div => div.addEventListener('mouseover', () => {div.style.background = 'black'}));
});

function clearDraw(){
    const alldivs = document.querySelectorAll('.square')
    alldivs.forEach(div => div.removeAttribute('style'))
};

let clearbutton = document.getElementById('clear')
clearbutton.addEventListener('click', () => {
    clearDraw()
    currentMode('Drawing Cleared!')
});

function changeGrid(){
    clearDraw()
    currentMode('No mode selected!')
    const sqsizeinput = document.getElementById('sqsize').value
    if(sqsizeinput>=100) return alert('Only values lower than 100!!!');
    console.log(sqsizeinput)
    const newsqsize = squareSize(sqsizeinput);
    const gridcontainer = document.getElementById('grid');
    gridcontainer.style.gridTemplateColumns = `repeat(${sqsizeinput}, ${newsqsize}px)`;
    gridcontainer.style.gridTemplateRows = `repeat(${sqsizeinput}, ${newsqsize}px)`;
    const alldivs = document.getElementById('grid')
    while(alldivs.firstChild){alldivs.removeChild(alldivs.firstChild)}
    const grid = document.querySelector('#grid')
    for (i=1; i<=sqsizeinput**2; i++){
        let div = document.createElement('div')
        div.classList.add('square')
        grid.appendChild(div)
    }
};



let buttonchangegrid = document.getElementById('submit');
buttonchangegrid.addEventListener('click', changeGrid);


let title = document.getElementById('title');
title.textContent = 'Etch-A-Sketch';
let signature = document.getElementById('signature');
signature.textContent = 'Developed by Anastácio Gomes.';