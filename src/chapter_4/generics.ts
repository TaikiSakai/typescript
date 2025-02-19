{
    // function repeat<T>(elem: T, length: number): T[] {
    //     const result: T[]= [];

    //     for (let i=0; i<length; i++) {
    //         result.push(elem);
    //     }

    //     return result;
    // }
    type Func = <T>(arg: T, num: number) => T[];
    
    const repeat: Func = (elem, len) => {
        const res = [];
        for (let i=1; i<len; i++) {
            res.push(elem);
        }

        return res;
    }

    console.log(repeat<number>(123, 3));
    console.log(repeat<string>("a", 5));

   const pair = <T1, T2>(left: T1, right: T2): [T1, T2] => [left, right];

   repeat("a", 5);

   // 関数型

}