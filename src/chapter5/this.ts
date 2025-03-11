{
    class User {
        name: string;
        #age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.#age = age;
        }

        public isAdult(): boolean {
            return this.#age >= 20;
        }

        public filterOlder(users: User[]): User[] {
            console.log(this.#age);
            return users.filter(u => u.#age > this.#age);
        }
    }

    const uhyo = new User('uhyo', 22);
    const tom = new User('tom', 17);
    const bob = new User('bob', 30);

    const older = uhyo.filterOlder([tom, bob]);
    console.log(older);
}