//Counting player level and highestLeve
let level = 1 ; 
let highestLevel = 0; 

//Increase speed when player is level up 
let increaseSpeed = 1; 

// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    // reset to their starting point upon disappearing off the canvas
    if (this.x < 505) {
    } else {
        this.x = -20;
    } 
    
    this.x = this.x + this.speed;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    checkCollisions (this.x, this.y);
};

// collision detects between plyer and enemies,
function checkCollisions (enemyX, enemyY){
    if ((Math.abs(enemyX - player.x) < 60) && (Math.abs(enemyY-player.y) < 40)) {

        // when player has collided, compare current level with hiehest level
        if (level >= highestLevel) {
            highestLevel = level;

            // Alert for the level
            swal (`Sorry! But, you got highest level today!`);

        } else {

            swal (`Sorry! You've hit the bug, try again `);

        }
        
        // Set all default 
        player.x = 200;
        player.y = 400;
        level = 1;
        increaseSpeed = 1;
        
        // After collision, Reset Enemies's speed 
        for (let i in allEnemies) {
            allEnemies[i].speed = Math.floor(Math.random()*3)+2;
        }

    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {

    if (key === "left" && this.x > 0) {
            this.x = this.x - 100;

            // check collision between stone and player this. is player
            collisitonWithStone = checkblock(this.x, this.y);

            // If checkblock function returns true, Do not move player this direction
            if (collisitonWithStone === true) {
                this.x = this.x + 100;
            }

         } else if ( key ==="right" && this.x < 400){
            this.x = this.x + 100;
            collisitonWithStone = checkblock(this.x, this.y);

            if (collisitonWithStone === true) {
                this.x = this.x - 100;
            }
        
        } else if ( key ==="up" && this.y > 0){
            this.y = this.y - 82;
            collisitonWithStone = checkblock(this.x, this.y);

            if (collisitonWithStone === true) {
                this.y = this.y + 82;
            }
        
        } else if ( key ==="down" && this.y < 400){
            this.y = this.y + 82;
            collisitonWithStone = checkblock(this.x, this.y);

            if (collisitonWithStone === true) {
                this.y = this.y - 82;
            }        
    }
 
 // when player arrive at the water, change level and enemies'speed
    if (this.y === -10) {
        player.x= 200;
        player.y= 400;
        level++;
        increaseSpeed++;

        // Alert for passing the level
        swal (`Good job! You are level ${level}`);
        
        // Icrease allEnemiies' speed 
        for (let i in allEnemies) {
            allEnemies[i].speed = allEnemies[i].speed + Math.floor(Math.random()*increaseSpeed);
        }

        // Changing position of stone 
        stone.x = (Math.floor(Math.random()*5))*100;
        stone.y = (Math.floor(Math.random()*3))*100+40;

        // changing current level
        levelElement.textContent = `Level :  ${level}`; 
    }

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies =[new Enemy (-10,65,4), new Enemy (-40,150,2), new Enemy (0,230,5)];
let player = new Player (200,400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }
    player.handleInput(allowedKeys[e.keyCode]);
});


// New stone object on the game
var Stone = function() {
    this.sprite = 'images/Rock.png';
    this.x = (Math.floor(Math.random()*5))*100;
    this.y = (Math.floor(Math.random()*3))*100+40;
};

// put stone on the game board
Stone.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    
    // put text on the game board
    ctx.font = "25px Arial";
    ctx.fillStyle = "white";

    ctx.fillText(`HIGHEST LEVEL : ${highestLevel} `,10,80);
    ctx.fillText(`LEVEL : ${level} `,10,110);
};


let stone = new Stone ();

// check collision between player and stone object
function checkblock (playerX, playerY){

    if (Math.abs((stone.x-playerX)) < 71 && (Math.abs(stone.y-playerY) < 40)) { 
        result = true;
    } else {
        result = false;
    }

    return result;
};