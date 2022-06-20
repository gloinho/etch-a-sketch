const container = document.querySelector('#grid-container')
for (i=1; i<=256; i++){
    let divs = document.createElement('div')
    divs.classList.add('grid', i)
    container.appendChild(divs)
}

const divs = document.querySelectorAll('.grid')
divs.forEach(div => div.addEventListener('mouseover', () => {div.style.background='black'}))
