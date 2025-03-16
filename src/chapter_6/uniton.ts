{
    type Animal = { 
        species: string;
        age: number;
    };

    type Human = {
        name: string;
        age: string;
    };

    type User = Animal | Human;

    const tama: User = {
        species: 'cat',
    };

    const john: User = {
        name: 'John',
    };

    const user: User = {
        name: 'John',
        age: '17',
    }

    console.log(user.age);
    
}