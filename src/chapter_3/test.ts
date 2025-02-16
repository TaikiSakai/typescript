type User ={
    name: string,
    age: number,
    premiumUser: boolean,
};

const data: string = `
uhhyo,26,1
John,17,0
Mary,14,1
`;

const users: User[] = [];

const lines = data.split("\n");

for (const line of lines) {
    if (line === '') {
        continue;
    }
    const [name, ageString, premiumUserString] = line.split(',');
    const age = Number(ageString);
    const premiumUser = Boolean(Number(premiumUserString));

    users.push({name, age, premiumUser});
}


console.log(lines)

console.log(users);

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age}) is a premiumUser`);
    } else {
        console.log(`${user.name} (${user.age}) is not a premiumUser`);
    }
}
