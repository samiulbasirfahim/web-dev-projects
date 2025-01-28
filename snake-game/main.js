const canvas = document.getElementById('canvas')

let snakeBlock = document.createElement('div')
canvas.appendChild(snakeBlock)
snakeBlock.className = 'snakeBlock'

let max = 388;
let step = 10;

let foodTop = 0;
let foodLeft = 0;

let score = 0;
let scoreDisplay = document.createElement('p')
scoreDisplay.id = 'score'
scoreDisplay.innerText = score;
document.querySelector('#canvasWrapper').insertAdjacentElement('beforebegin', scoreDisplay)

let currentTop = 0;
let currentLeft = 0;
snakeBlock.style.top = `${currentTop}px`;
snakeBlock.style.left = `${currentLeft}px`;

let direction = 'right'
let food;
function spawnFood() {
    foodTop = Math.random() * max;
    foodLeft = Math.random() * max;
    food = document.createElement('div')
    food.style.left = foodLeft + "px";
    food.style.top = foodTop + "px";
    food.id = 'food';
    canvas.appendChild(food);
}


spawnFood();
setInterval(() => {
    if (Math.abs(foodLeft - currentLeft) < 20 && Math.abs(foodTop - currentTop) < 20) {
        scoreDisplay.innerText = ++score;
        food.remove()
        spawnFood();
    }
    switch (direction) {
        case 'right':
            moveRight();
            break;
        case 'left':
            moveLeft();
            break;
        case 'up':
            moveUp();
            break;

        case 'down':
            moveDown();
            break;
        default:
            break;
    }
}, 1)

function moveUp() {
    if (currentTop > 0) {
        snakeBlock.style.top = `${--currentTop}px`;
    } else {
        snakeBlock.style.top = `${currentTop}px`;
        currentTop = max;
    }
}


function moveDown() {
    if (currentTop < max) {
        snakeBlock.style.top = `${++currentTop}px`;
    } else {
        currentTop = 0;
        snakeBlock.style.top = `${++currentTop}px`;
    }
}

function moveLeft() {
    if (currentLeft > 0) {
        snakeBlock.style.left = `${--currentLeft}px`;
    } else {
        snakeBlock.style.left = `${currentLeft}px`;
        currentLeft = max;
    }
}

function moveRight() {
    if (currentLeft < max) {
        snakeBlock.style.left = `${++currentLeft}px`;
    } else {
        currentLeft = 0;
        snakeBlock.style.left = `${++currentLeft}px`;
    }
}

document.body.addEventListener('keydown', (e) => {
    if (e.key == 'h') {
        direction = direction == 'right' ? 'right' : 'left'
    }
    if (e.key == 'l') {
        direction = direction == 'left' ? 'left' : 'right'
    }

    if (e.key == 'k') {
        direction = direction == 'down' ? 'down' : 'up'
    }

    if (e.key == 'j') {
        direction = direction == 'up' ? 'up' : 'down'
    }
})


document.addEventListener('contextmenu', e => {
    e.preventDefault();
    e.stopPropagation();
})