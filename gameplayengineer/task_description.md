# Gameplay Engineer Overview

The project is a platform game. The game is consisted of a number of suspended platforms of different heights and different movements. Beginning from the ground, the player jumps from platform to platform. The score of the game is tallied using the highest height achieved by the player. The player has the following types of control over the player: move left, forward, right, backward and jump, as well as camera controls with mouse and arrow keys.


# Task

Write a test using Jest and Puppeteer that does the following:
1. verifies that the ball moves in all directions, jumps and double jumps
2. automates jumping up onto each platform, for the first 3 platforms
3. takes a screenshot every time score changes and save the test image in /testoutputs/{score}.jpg

Write all of your code in the index.js -- you may use additional files if necessary. You may also modify the code in the game folder as much as you need.