const list = [];

for (let i=0 ; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
        list.push('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
        list.push('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
        list.push('Buzz');
    } else {
        console.log(i);
        list.push(i);
    }
}

list.forEach((item, _) => {
    console.log(item);
});