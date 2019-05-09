"use strict";
// Enemies our player must avoid
// Variables applied to each of our instances go here,
// we've provided one for you to get started

// constructor for Enemy
class Enemy {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
  }
}
//Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
Enemy.prototype.update = function(dt) {
  // setting speed for each enemy
  this.x = this.x + this.speed * dt;
  if (this.x > 505) {
    this.x = 0;
    this.speed = 100 + Math.floor((Math.random() ^ 150) + 1);
  }
}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//function to check collision(function definition for checkCollision())
Enemy.prototype.checkCollision = function() {
  if (player.x < this.x + 60 && player.x + 62 > this.x && player.y < this.y + 60 && player.y + 65 > this.y) {
    // resetting the players position
    player.x = 200;
    player.y = 410;
  }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// constructor for player
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  }
}
//update()
Player.prototype.update = function(dt) {
  if (this.y < 0) {
    setTimeout(function() {
      player.x = 200;
      player.y = 410;
    }, 200);
  }
};
//render()
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// created allEnemies to store instances of enemies
var allEnemies = [];
// Y coordinates for enemies
var enemies = [60, 140, 230];
// speeds for enemies
var speeds = [300, 200, 230];
// X coordinates for enemies
var pos = [100, 0, 50];
// creating instances of enemies
for ( var i = 0; i < enemies.length; i++) {
  // passing parameters to constructor
  var obj = new Enemy(pos[i], enemies[i], speeds[i]);
  //adding instances into allEnemies array
  allEnemies.push(obj);
}
// Place the player object in a variable called player
// instance for  player
var player = new Player(200, 410);
//for moving player when key is pressed and
Player.prototype.handleInput = function(e) {
  // conditons to make player not to move off the screen
  //left
  if (e == 'left' && this.x > 0) {
    this.x = this.x - 100;
  }
  //right
  if (e == 'right' && this.x < 350) {
    this.x = this.x + 100;
  }
  //up
  if (e == 'up' && this.y > 0) {
    this.y = this.y - 84;
  }
  //down
  if (e == 'down' && this.y < 350) {
    this.y = this.y + 84;
  }

}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
