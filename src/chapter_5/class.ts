{
    class User<T> {
        name: string;
        #age: number = 0;
        data: T;

        constructor(name: string, age: number, data: T) {
            this.name = name;
            this.#age = age;
            this.data = data;
        }

        isAdult(): boolean {
            return this.#age >= 20;
        }
    }

    const uhyo: User<string> = new User('sakai', 22, "additional data");

    type MyUserType = new () => User<T>;


    // const u = new MyUser();

    console.log(uhyo instanceof User);
}