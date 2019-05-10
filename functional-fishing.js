/**
 * Function Fishing
 * A simple fishing game
 *
 * Rules:
 * To Eat: Must have at least 1 fish and a fire
 * To Make Fire: Must have a least 1 log of wood
 * To Fish: Must have at least 1 piece of bait and fire must be out
 * To Find Wood: The fire must be out.
 * To Find Bait: The fire must be out.
 */

/**
 * The game object stores the current game status
 */
const game = {

}

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 *
 * To stop a fire:
 *    The fire must be going
 */

/**
 * fish
 * To go fishing:
 *    The fire must be out
 *    There must be at least 1 piece of bait
 */

/**
 * bait
 * To search for bait:
 *    The fire must be out
 */

/**
 * wood
 * To search for wood:
 *    The first must be out
 */

/**
 * eat
 * To eat a fish:
 *    There first must be going
 *    There must be at least 1 fish
 */

/**
 * inventory
 * Shows the players current inventory
 */

/**
 * help
 * Display the game instructions.
 */
function help () {
  return `Welcome to Functional Fishing.
The text-based console fishing game.

Instructions: 
In this game you will catch, cook and eat fish. You will also search for wood and bait.

Commands:
To eat a fish, use eat()
To go fishing, use fish()
To start/stop a fire, use fire()
To search for bait, use bait()
To search for wood, use wood() 
To check the current inventory, use inventory()
To view these instructions, again, use help()`
}

console.log(help())
