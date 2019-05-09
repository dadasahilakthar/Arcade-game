# Classic Arcade Game Clone Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore,  we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

# Aim of the project

To run and play the Arcade game with the help of Object oriented java script.

## Cloning of the Project

1.  First we need to clone the project from the udacity blog.
2.  Then read all the files given in the project.

## What I have done to this Project

1.  I opened the `index.html` page on browser to run the game.
2.  I found few errors in developer console and  resolved those errors to  get the canvas of the arcade game.
3.  Then I added player object and add enemy object to the canvas.
4.  Added motion to the enemy objects by using `random()` function.
5.  Added update, render methods for player object.
6.  movement to the player is given using arrow keys.
7.  After that I wrote conditions for collision using `checkCollision()`.
8.  I wrote some conditions such that the player object should not move out of the screen.
9.  If the player collides with enemy, then the players position is changed to original position.
10. If the player reaches the water layer, then the player waits for some time and its position is changed to original position.

## playing Instructions

  **Left Arrow :**  player moves to the adjacent left block
  **Right Arrow :** player moves to the adjacent right block
  **Up Arrow :** player moves to the adjacent upper block
  **Down Arrow :** player moves to the adjacent lower block

  **Note :** The players position will not exceed canvas

## Conclusion
1.  From this project I have learnt how to work with Canvas.
2.  I have learnt Object oriented JavaScript.
3.  I have learnt how to implement the objects and functions.
4.  I have learnt different ES6 functionalities.
