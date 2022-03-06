/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  let number = Math.random()
  if (number > 0.5) {
    return "heads"
  } else {
    return "tails"
  }
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  var res = [];
  for (let i = 0; i < flips; i++) {
    res.push(coinFlip())
  }
  return res
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  let answer = {heads: 0, tails: 0}
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "heads") {
      answer.heads = answer.heads + 1 
    } else {
      answer.tails = answer.tails + 1 
    }
  }
  return answer
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(called) {

  let flipped = coinFlip(); 
  let r = ""
  if (flipped == called) {
    result = "win"
  } else {
    result = "lose"
  }
  return {call: called, flip: flipped, result: r}
}

/** Export 
 * 
 * Export all of your named functions
*/

export {coinFlip};
export {coinFlips};
export {countFlips};
export {flipACoin};