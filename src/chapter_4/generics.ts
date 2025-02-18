{
    function repeat<T>(elem: T, length: number): T[] {
        const result: T[]= [];

        for (let i=0; i<length; i++) {
            result.push(elem);
        }

        return result;
    }

    console.log(repeat<number>(123, 3));
    console.log(repeat<string>("a", 5));

   const pair = <T1, T2>(left: T1, right: T2): [T1, T2] => [left, right];
}