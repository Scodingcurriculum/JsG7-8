// Creating Snake Game

// Create canvas and set up context
const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

// create box unit
const box = 32;

// create snake
var snake = [];

snake[0] = {
    x: 9 * box,
    y: 10 * box
};

// create the food
var food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
};

// load audio files for game sounds
var dead = new Audio();
var eat = new Audio();
var up = new Audio();
var right = new Audio();
var left = new Audio();
var down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// create score variable
var score = 0;

// Control the snake movement
var dir;

// Keypress event listener to control the snake direction
document.addEventListener("keydown", direction);

// direction function to handle key presses
function direction(event) {
    var key = event.keyCode;
    if (key == 37 && dir != "RIGHT") {
        left.play();
        dir = "LEFT";
    } else if (key == 38 && dir != "DOWN") {
        up.play();
        dir = "UP";
    } else if (key == 39 && dir != "LEFT") {
        right.play();
        dir = "RIGHT";
    } else if (key == 40 && dir != "UP") {
        down.play();
        dir = "DOWN";
    }
}

// load images for the game
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// check collision function to detect if the snake collides with itself
function collision(head, array) {
    for (var i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}

// Draw function to render the game on the canvas
function draw() {
    ctx.drawImage(ground, 0, 0);

    for (var i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.drawImage(foodImg, food.x, food.y);

    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // determine the direction of movement based on user input
    if (dir == "LEFT") snakeX -= box;
    if (dir == "UP") snakeY -= box;
    if (dir == "RIGHT") snakeX += box;
    if (dir == "DOWN") snakeY += box;

    // if the snake eats the food
    if (snakeX == food.x && snakeY == food.y) {
        score++;
        eat.play();
        // generate new food position
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        };
        // we don't remove the tail
    } else {
        // remove the tail
        snake.pop();
    }

    // add new Head
    var newHead = {
        x: snakeX,
        y: snakeY
    };

    // Game over conditions: hitting the walls or colliding with itself
    if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)) {
        clearInterval(game);
        dead.play();
    }

    // add the new head to the beginning of the snake array
    snake.unshift(newHead);

    // display the score on the canvas
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2 * box, 1.6 * box);
}

// call draw function every 200 milliseconds to update the game state
var game = setInterval(draw, 200);
