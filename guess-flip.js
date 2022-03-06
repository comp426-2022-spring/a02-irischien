import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args["call"]
const call = args.call

try {
    if (call == "heads" || call == "tails") {
        console.log(flipACoin(call));
    } else {
        throw new Error;
    }
} catch (error) {
    console.log('Error: no input')
    console.log('Usage: node guess-flip --call=[heads|tails]')
}
