{
    type User = {
        name: string;
        age : number;
    };

    const getName = (u: User): string => {
        console.log('u is', u);
        return u.name;
    };

    const users: User[] = [
        { name: "uhyo", age: 26 },
        { name: "John", age: 15 },
    ];

    const names = users.map((u: User) => {
        console.log(u.name);
    });
    // console.log(names);
}