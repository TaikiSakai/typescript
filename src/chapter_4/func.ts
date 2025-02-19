

const range = (min: number, max: number): number[] => {
    const res = [];
    
    for (let i = min; i <= max; i++) {
        res.push(i);
    }

    return res;
};

const res = range(1,10);
console.table(res);