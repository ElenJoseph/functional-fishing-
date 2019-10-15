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
  fire: false,
  fish: 0,
  bait: 0,
  wood: 0,
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

function fire () {
  if (game.fire) {
    game.fire = false
    return 'You have successfully put out the fire.'
  } else if (game.wood >= 1) {
    game.wood --
    game.fire = true
    return 'You have successfully started the fire.'
  } else {
    return 'You do not have enough wood.'
  }
}
/**
 * fish
 * To go fishing:
 *    The fire must be out
 *    There must be at least 1 piece of bait
 */
function fish(){
  if (game.fire){
    return 'You need put out the fire first!'
  }else if(game.bait >= 1){
    game.fish ++
    game.bait --
    return 'You have successfully caught 1 fish!'
  }else{
    return "You don't have enough bait!"
  }
}

/**
 * bait
 * To search for bait:
 *    The fire must be out
 */
function bait(){
  if(game.fire){
    return 'You need put out the fire first!'
  }else{ 
    game.bait ++
    return 'You have successfully found 1 bait!'
  }
}
/**
 * wood
 * To search for wood:
 *    The first must be out
 */
function wood(){
  if(game.fire){
    return 'You need put out the fire first!'
  }else{ 
    game.wood ++
    return 'You have successfully found 1 piece of wood!'
  }
}
/**
 * eat
 * To eat a fish:
 *    There first must be going
 *    There must be at least 1 fish
 */
function eat(){
  if (game.fire){
    if(game.fish>= 1){
      game.fish--
      return 'You have just ate 1 fish!'
    }else{ 
      return "You don't have enough fish"
    }
  }else{
    return 'You need to start the fire!'
  }
  
}
/**
 * inventory
 * Shows the players current inventory
 */
function inventory(){
  const response = []
  response.push('INVENTORY:\n')
  for (const item in game) {
    if (item === 'fire') {
      if (game[item]) {
        response.push('The fire is burning.\n')
      } else {
        response.push('The fire is not burning.\n')
      }
    } else {
      response.push(`${item}: ${game[item]}\n`)
    }
  }
  return response.join('')
}

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