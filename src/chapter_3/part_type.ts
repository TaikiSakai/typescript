type Animal = {
    name: string;
};

type Human = {
    age: number,
    name: string,
};

type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
};

type HumanFamily = {
    familyName: string;
    mother: Human;
    father: Human;
    child: Human;
};


type HasName = {
    name: string;
};

type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

type S = Family<Animal, Human>;
type T = Family<Human, Animal>;

const arr: (number | string)[] = [123, 'str'];
