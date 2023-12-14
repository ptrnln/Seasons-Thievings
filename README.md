# Seasons-Beatings
A top-down beat 'em up style game with a cheerful Christmas theme
## Background
You are an elf within the ranks of Santa's global outlet mall network. This time of year always brings out the best in people,
as you find yourself fending off these would-be grinches, who are poaching presents meant for local underprivileged children straight from Santa's sleigh.

The objectives are simple:
- To win, you must make it to the end of the time limit and still have presents in the sleigh, as indicated by a "holiday spirit" bar that depletes with each stolen gift,
  and replenishes with each gift recovery.
- You lose if the bar is fully depleted and all gift-carrying enemies have left the screen before time runs out.

## Functionality and MVPs
In this game, users will be able to:
- Move around the game stage with the WASD and arrow keys
- Attack an NPC with the spacebar, eliminating them from the game and recovering a gift if they were carrying one
- Pause and restart the game
- Toggle on/off music
- Save scores to their locally-stored leaderboard

In addition, this project will also include:
- An **About** section describing the rules and background of the game
- A production README

## Wireframe

![Screenshot 2023-12-13 230756](https://github.com/PlasmaNuke/Seasons-Beatings/assets/5847452/7ae28755-fae5-46a5-b14b-4815d81c980e)
- Links will include a link to this Github repo, as well as to my own Github profile
- Help/controls will include a control legend and instructions on how to play the game

## Technologies, Libraries, and APIs
- The `Canvas` API to render the game stage
- `Webpack` to bundle the JavaScript code
- `npm` to install and manage Node dependencies
- `Pixi.js` for handling art assets like spritesheets

## Implementation Timeline
- **Thursday:** Setup project, including installing dependencies and getting Webpack up and running. Get the Canvas element rendering to the browser with appropriate sizing and get
comfortable interacting with the Canvas API.
- **Friday and weekend:** Implement player movement functionality, test that this functionality has the appropriate behaviors. Implement the player's attack action that will remove entities from the game upon collision with the attack's hitbox. If there is time, implement enemy movement functionality that will direct them towards a single point.
- **Monday:** Implement enemy gift-stealing functionality and health-pool system that updates accordingly after a gift has been stolen/recovered.
- **Tuesday:** Implement game-winning and game-losing logic. Polish graphics.
- **Wednesday:** Implement scoring system that allows you to save a score to your locally-stored leaderboard upon winning the game. If there is time, start on bonuses.

## Bonus features
- An item system including but not limited to: weapons like **Candy Cane** which will extend your reach, and **Snowglobes** which will *explode and freeze nearby enemies on impact*.
- Make presents actually drop from enemies which will then need to be recovered by walking over them.
- More robust enemy pathfinding that will allow them to go for dropped presents if they are closer than the sleigh and navigate around boundaries, which the player will be prompted to place before the start of game to maximize their on-screen time.
- More levels of increasing difficulty.
- Gather all these features under a shop menu that you will have access to in-between levels. You will earn currency based on # of gifts stolen and "health" left at end of level. High scores will be determined by the last completed level and currency left unspent.


