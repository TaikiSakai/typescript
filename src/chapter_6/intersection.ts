import { get } from "http";

{
    type Animal = { species: string};
    type Human = { name: string};

    const getName = (human: Human) => {
        return human.name;
    };

    const getSpecies = (animal: Animal) => {
        return animal.species;
    };

    const mysteryFunc = Math.random() > 0.5 ? getName : getSpecies;

    console.log(mysteryFunc());

    type GetTimeFunc = () => Date;

    const useTime = (getTime: GetTimeFunc | undefined) => {
        const timeOrUndefined = getTime?.();
    }

    type User = {
        isAdult: () => boolean;
    }

    type Animal2 = {
        isChild: () => boolean;
    }

    const checkForAdult = (user: User | Animal2)=> {
        if (user.isAdult?.()) {
            console.log('User is an adult');
        }


}








