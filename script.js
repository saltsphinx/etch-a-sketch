const gridCanvas = document.querySelector('.canvas')
const gridButton = document.querySelector('.sizeButton')

gridButton.addEventListener('click', changeCanvasSize)

function changeCanvasSize() {
    let promptSize = prompt('What size would you like?', 16);
    if (!isNaN(+promptSize)) {
        setUpCanvas(+promptSize)
    } else {
        alert('Enter a number please.')
    }
}

function setUpCanvas(num) {
    gridCanvas.style.setProperty('grid-template-columns', `repeat(${num}, auto)`)
    gridCanvas.style.setProperty('grid-template-rows', `repeat(${num}, auto)`)
    checkChildren()
    createRow(num * num)
}

function checkChildren() {
    if (gridCanvas.hasChildNodes()) {
        for (; gridCanvas.childNodes.length > 0;) {
            gridCanvas.firstChild.remove()
        }
    }
}

function createRow(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div')
        gridCanvas.appendChild(row)
        row.classList.add('item')
    }
}