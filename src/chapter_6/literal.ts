{


    const getHelloStr = (): `Hello, ${string}!` => {
        const rand = Math.random();

        if (rand > 0.5) {
            return 'Hello, world!';
        } else if (rand > 0.25) {
            return 'Hello, TypeScript!';
        } else if (rand > 0.1) {
            return 'Hello, Deno!';
        } else {
            return 'Hello, Rust!';
        }
    }



    function makeKey<T extends string>(userName: T) { 
        // return `user: ${userName}` as const;
        return userName.slice(5);
    }


    const obj = {
        name: 'John',
        age: 17,
    }

    const uhhyoKey = makeKey('uhhyoooo');
    console.log(uhhyoKey);


}