import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args["call"]
const call = args.call
console.log(flipACoin(call));
