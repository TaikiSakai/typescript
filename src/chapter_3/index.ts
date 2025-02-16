const obj_1 = {
    foo: 123,
    bar: 456,
};

const obj_2 = {
    baz: 789,
    ...obj_1,
};

obj_1.foo = 123456;

console.log(obj_1); 
console.log(obj_2);