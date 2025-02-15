import { createInterface } from "readline";

const rc = createInterface({
    input: process.stdin,
    output: process.stdout
});

rc.question('Enter some text:', (line) => {
    console.log(`Entered ${line}`);
    console.log(line+1000);
    rc.close();
});


const bigint = BigInt('qwerty');
