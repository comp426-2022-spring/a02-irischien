import { flipACoin } from "./modules/coin.mjs"
import minimist from "minimist";

const args = minimist(process.argv.slice(2))


try {
    const argv = process.argv.slice(2)[0].slice(7);
    if (argv == "heads" || argv == "tails") {
        console.log(flipACoin(argv));
    } else {
        throw new Error;
    }
} catch (error) {
    console.log('Error: no input')
    console.log('Usage: node guess-flip --call=[heads|tails]')
}
