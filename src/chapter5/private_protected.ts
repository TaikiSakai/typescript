{
    class User {
        name: string;
        protected age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        public isAdult(): boolean {
            return this.age >= 20;
        }
    }

    const person = new User('sakai', 22);
    console.log(person.age);

    class PremiumUser extends User { 
        public override isAdult(): boolean {
            return this.age >= 10;
        }
    }
}