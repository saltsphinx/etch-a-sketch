const gridCanvas = document.querySelector('.canvas')

function setUpCanvas(num) {
    gridCanvas.style.setProperty('grid-template-columns', `repeat(${num}, auto)`)
    gridCanvas.style.setProperty('grid-template-rows', `repeat(${num}, auto)`)

    createRow(num * num)
}

function createRow(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div')
        gridCanvas.appendChild(row)
        row.classList.add('item')
        console.log(i)
    }
}