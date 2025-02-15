import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter your name', (name) => {
    const displayName = name || 'Unkown';
    console.log(`Hello ${displayName}`);
    rl.close();
});