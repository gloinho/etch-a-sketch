const container = document.querySelector('#grid-container')
for (i=1; i<=256; i++){
    let divs = document.createElement('div')
    divs.classList.add('square')
    container.appendChild(divs)
}
let divs = document.querySelectorAll('.square')
divs.forEach(div => div.addEventListener('mouseover', () => {div.style.background='black'}))


const body = document.getElementById('body')
const button = document.createElement('button')
body.appendChild(button)

const gridcontainer = document.getElementById('grid-container')

function squareSize(size){
    if(size>=100) return alert('Only values lower than 100!!!')
    let sqsize = 500/size
    return sqsize
}
button.addEventListener('click', () => {
    let size = prompt('What size do you want?!')
    let sqsize = squareSize(size)
    gridcontainer.style.gridTemplateColumns = `repeat(${size}, ${sqsize}px)`
    gridcontainer.style.gridTemplateRows = `repeat(${size}, ${sqsize}px)`
    for (i=1; i<=size**2; i++){
        let divs = document.createElement('div')
        divs.classList.add('square')
        container.appendChild(divs)
    }
    let divs = document.querySelectorAll('.square')
    divs.forEach(div => div.addEventListener('mouseover', () => {div.style.background='black'}))
})
