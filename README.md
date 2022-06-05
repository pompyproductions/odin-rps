# The Odin Project: ROCK PAPER SCISSORS

Assignment from The Odin Project curriculum.

## Postmortem 01: Console Version

Game works entirely with alerts and prompts.  
Next version should implement UI. Design a webpage for it.  

The game accepts the following parameters so far:

- **ROUNDS:** How many rounds will be played? Decided at the start of game loop.
- **PLAY AGAIN:** Do you want to play again? Decided at the end of game loop.
- **SCORE:** What's the rule for score? So far, 1 to player for win, 1 to pc for loss, 0 for draw.
Hard-written rule. Can be modified to be a variable decided at the start of game loop, 
and referenced at the end of compareMoves().

What else could be added?

- **ROUND MODE:** Instead of having a set number of rounds, play "first to X score".
- **SCORE MODE:** Instead of w1-d0-l0, you can have w3-d1-l0, or negative values.

Computer moves are calculated before player moves.  
This means you can cheat with F12.  
Good for debugging but can be removed later on?