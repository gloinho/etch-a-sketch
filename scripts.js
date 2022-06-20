// Initial GRID (16x16).
const container = document.querySelector('#grid');
for (i=1; i<=256; i++){
    let divs = document.createElement('div');
    divs.classList.add('square');
    container.appendChild(divs);
}
const blackdiv = document.querySelectorAll('.square');
blackdiv.forEach(div => div.addEventListener('mouseover', () => div.classList.add('black')));



// Calculating square size without changing the amount of pixels of de div (grid-container (500x500))
function squareSize(size){
    if(size>=100) return alert('Only values lower than 100!!!');
    let sqsize = 500/size;
    return sqsize;
};

function randomColor(){
    let r = Math.floor(Math.random()*(255));
    let g = Math.floor(Math.random()*(255));
    let b = Math.floor(Math.random()*(255));
    return `rgb(${r}, ${g}, ${b})`;
};

const buttonrainbow = document.getElementById('rainbow')
buttonrainbow.addEventListener('click', () => {
    let sizeinput = prompt('RAINBOW MODE! What grid-size do you want?! ');
    let newsqsize = squareSize(sizeinput);
    const gridcontainer = document.getElementById('grid');
    gridcontainer.style.gridTemplateColumns = `repeat(${sizeinput}, ${newsqsize}px)`;
    gridcontainer.style.gridTemplateRows = `repeat(${sizeinput}, ${newsqsize}px)`;
    for (i=1; i<=sizeinput**2; i++){
        let divs = document.createElement('div');
        divs.classList.add('square');
        container.appendChild(divs);
    };
    let divs = document.querySelectorAll('.square');
    cleardraw(divs)
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
 })

//Page UI
let title = document.getElementById('title')
title.textContent = 'Etch-A-Sketch'
let signature = document.getElementById('signature')
signature.textContent = 'Developed by Anastácio Gomes.'
let clearbutton = document.getElementById('clear')
clearbutton.addEventListener('click', () => {
    let alldivs = document.querySelectorAll('.square')
    cleardraw(alldivs) 
})

let blackmode = document.getElementById('black')
blackmode.addEventListener('click', () => {
    let sizeinput = prompt('BLACK MODE! What grid-size do you want?! ');
    let newsqsize = squareSize(sizeinput);
    const gridcontainer = document.getElementById('grid');
    gridcontainer.style.gridTemplateColumns = `repeat(${sizeinput}, ${newsqsize}px)`;
    gridcontainer.style.gridTemplateRows = `repeat(${sizeinput}, ${newsqsize}px)`;
    for (i=1; i<=sizeinput**2; i++){
        let divs = document.createElement('div');
        divs.classList.add('square');
        container.appendChild(divs);
    };
    const blackdiv = document.querySelectorAll('.square');
    cleardraw(blackdiv)
    blackdiv.forEach(div => div.addEventListener('mouseover', () => {div.classList.add('black')}));
})

function cleardraw(what){
    what.forEach(square => {square.removeAttribute('style', square.classList.remove('black'))})
}