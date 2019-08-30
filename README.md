# Functional Fishing

## Introduction
Teach a computer to fish and you will have fish for a lifetime, but give a computer a fish and you will just have a smelly computer. 

## Objective
For this exercise, you will be demonstrating your understanding of using functions, conditional statements, and loops by creating a simple text-based fishing game. The game will exist entirely in the console and the player will interact with the game by calling custom functions.

## Game Play
There will be 7 actions which the user will be able to perform throughout the game (see below). Each action may have certain conditions that must be met in order for the task to be performed. When a condition is not correct, the game must inform the player what they must do in order to perform the desired task. After an action has been performed, a status message should be present to the player explain what happened.

## Actions

### Fishing
The player can go fishing, which will increase the player's fish inventory. Fish are use to eat.

A player may go fishing only if:
- The player has at least 1 piece of bait
- The fire has been stopped

### Starting / Stopping a fire

The player can start or stop a fire, which is use to cook fish for eating. The same action is use to both start and stop the fire. Starting a fire will decrease the wood inventory. 

The player can start the fire only if:
- The player has at least 1 piece of wood
- The fire has been stopped

The player can stop the fire only if:
- The fire has been started

### Searching for bait

The player can search for bait, which will increase the player's bait inventory. Bait is used to go fishing.

The player can go searching for bait if:
- The fire has been stopped

### Searching for wood

The player can search for wood, which will increase the player's wood inventory. Wood is used to start a fire.

The player can go searching for wood if:
- The fire has been stopped

### Eating

The player can eat fish. Eating will decrease the player's fish inventory. 

The player can only eat if:
- The player has at least 1 fish
- The fire has been started

### Checking inventory

The player can do a check on the inventory status. Doing a inventory status should return a list of how many items the player currently has.

### Getting instructions

The player can return a list of instructions on how to the play the game. The instruction should include the commands for all of the actions, what requirements are needed to complete an action, and what is the result of completing each action.

## Requirements
The following requirement must be met in order to complete the assignment successfully:

1. Download the [Functional Fishing starter files](https://github.com/imdac/mtm6302-functional-fishing/archive/master.zip). The files contain `index.html`, `style.css`, and `functional-fishing.js`. **All changes for this assignment will be made to the `functional-fishing.js` file.**
2. You must use the `game` object to hold the games current status including inventory items.
3. Create the following functions, one for each action:
    1. A `fire()` function will start or stop the fire
    1. A `fish()` function will let the player go fishing
    2. A `bait()` function will let the player get bait
    3. A `wood()` function will let the player get wood
    4. An `eat()` function will let the player eat
    5. An `inventory()` function will let the player check the inventory
4. The functions must determine if necessary conditions have been met before performing any action and relay a message to the player.
5. If the action is completed and it affects the inventory (e.g. eating will decrease the number of fish) the game status object should be updated to reflect that.
6. The function must return a message indicating that the action has been completed and the affect it had on the inventory.

> IMPORTANT Don't forget to test your game. Get a friend to play. **It is easy to make mistakes, and testing is how we find them.**

## Example
An example video of Functional Fishing can be found on [YouTube](https://youtu.be/lPpVAdW4q6Q)

## Rubric

| Task | Points |
| ---  | :---:  | 
| Successfully creates the `fire()` function | 2 |
| Successfully creates the `fish()` function | 2 |
| Successfully creates the `bait()` function | 1 |
| Successfully creates the `wood()` function  | 1 |
| Successfully creates the `eat()` function  | 2 |
| Successfully creates the `inventory()` function | 2 |
| **Total** | **10** | 

## Submission
When the assignment is completed, follow the steps below to submit for grading:

1. Create a commit with the message "Completes the Functional Fishing assignment"
2. Push all commits to GitHub.
3. Submit the URL to your GitHub repository to the **Functional Fishing** assignment on BrightSpace.  