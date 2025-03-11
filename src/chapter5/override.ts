{
    class User {
        name: string;
        #age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.#age = age;
        }

        public isChild(): boolean {
            return this.#age >= 20;
        }
    }

    class premiumUser extends User {
        rank: number;

        constructor(name: string, age: number, rank: number) {
            super(name, age);
            this.rank = rank;
        }

        public override isAdult(): boolean {
            return true;
        }
    }
}