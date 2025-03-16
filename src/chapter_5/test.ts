{
    class User {
        readonly name: string;
        readonly age: number;

        public constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        public getMessages(message: string): string {
            return `${this.name} (${this.age}) [${message}]`;
        }
    }

    const createuser = (name: string, age: number) => {
        return (message: string) => {
            return `${name} (${age}) [${message}]`;
        }
    }
}