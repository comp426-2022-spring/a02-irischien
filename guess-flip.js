import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import { createRequire } from 'module';

const args = require("minimist")(process.argv.slice(2))
args["call"];
const call = args.call;
console.log(flipACoin(call));
