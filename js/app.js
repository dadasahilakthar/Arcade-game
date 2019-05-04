// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x > 505) {
    this.x = 0;
    this.speed = 100 + Math.floor((Math.random() ^ 150) + 1);
  }
  if (player.x < this.x + 60 && player.x + 62 > this.x && player.y < this.y + 60 && player.y + 65 > this.y) {
    player.x = 200;
    player.y = 410;
  }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemies = [60, 140, 230];
var speeds = [300, 200, 230];
var pos = [100, 0, 50];
for (i = 0; i < enemies.length; i++) {
  var obj = new Enemy(pos[i], enemies[i], speeds[i]);
  allEnemies.push(obj);
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(dt) {
  if (player.y < 0) {

    setTimeout(function() {
      player.x = 200;
      player.y = 410;
    }, 1000);
  }
};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var player = new Player(200, 410);
player.handleInput = function(e) {
  if (e == 'left' && this.x > 0) {
    this.x = this.x - 100;
  }
  if (e == 'right' && this.x < 350) {
    this.x = this.x + 100;
  }
  if (e == 'up' && this.y > 0) {
    this.y = this.y - 84;
  }
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
