const gridCanvas = document.querySelector('.canvas');
const gridButton = document.querySelector('.sizeButton');

gridButton.addEventListener('click', changeCanvasSize);

setUpCanvas(16);

function changeCanvasSize() {
    let promptSize = prompt('What size would you like?', 16);
    if (!isNaN(+promptSize)) {
        if (+promptSize >= 1 && +promptSize <= 32) {
            setUpCanvas(+promptSize);
        } else {
            alert('Please enter a number between 1 and 32.');
        }
    } else {
        alert('Enter a number please.');
    }
}

function setUpCanvas(num) {
    gridCanvas.style.setProperty('grid-template-columns', `repeat(${num}, auto)`);
    gridCanvas.style.setProperty('grid-template-rows', `repeat(${num}, auto)`);
    checkChildren();
    createRow(num * num);
    addHoverEvent();
}

function checkChildren() {
    if (gridCanvas.hasChildNodes()) {
        for (; gridCanvas.childNodes.length > 0;) {
            gridCanvas.firstChild.remove();
        }
    }
}

function createRow(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        gridCanvas.appendChild(row);
        row.classList.add('item');
    }
}

function generateRandomColor() {
    let hex = '0123456789abcdef'
    let returnValue = '#';
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random()*17)
        returnValue += hex.substr(randomNumber, 1)
    }
    return returnValue
}

function addHoverEvent() {
    let canvasChildren = gridCanvas.childNodes
    for (let i = 0; i < canvasChildren.length; i++) {
        canvasChildren[i].addEventListener('mouseover', function (e) {
            let childDiv = e.target
            let divStyle = childDiv.style
            divStyle.setProperty('background-color', `${generateRandomColor()}`)
             
        })
    }
}