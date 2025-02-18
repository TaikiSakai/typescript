{
    type HasName = {
        name: string;
    }

    type HasNameAndAge = {
        name: string;
        age: number;
    }

    const fromAge = (age: number): HasNameAndAge => {
        return { name: "John", age };
    };

    const fromAge2 = (name: string): HasName => {
        return { name: name };
    };

    const f: (age: number) => HasName = fromAge;
    const g: (name: string, age: number) => HasNameAndAge = fromAge2;
    const obj: HasName = f(100);
}