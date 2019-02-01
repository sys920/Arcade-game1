# Arcade-game 

The game is to get your character from the grass over the road. 
-The challenge is to avoid the bugs that travel on the road. 
-If a bug is touched, the character is back at the beginning, Upon reaching the water, the character is also back to the beginning

-app.js : Game logic 
-index.html : HTML5 Canvas Position
-engine.js :  Every few hundred millisecod call the update method 

# This Classic Arcade Game require

-[Player Movements]
-The Player can not move off screen
-The Player should only be able to move 1 'block' at a time.

-[Enemy Movements]
-The enemy should reset to their starting point upon disappearing off the canvas.
-Enemies should move at an appropriate speed, not too fast and not too slow.

-[Collision]
-Enemy-player collisions happen logically (not too early or too late).
-Enemy-player collision resets the game.
-Collisions occur when an enemy sprite and player sprite share the same x and y coordinates.

-[Levels]
-You should create levels. Players start at level 1, and each time your player successfully crosses to the water, the level increases. With each level increase, the speed at which the enemies move should increase. The current level should always be displayed at the top of the page.
-If a player collides with an enemy, they revert back to level 1.
You should track, maintain and display the highest level obtained in a single session.
