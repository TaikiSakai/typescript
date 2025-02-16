
type Obj = {
    foo?: number;
};

const ob_1: Obj = {};
const ob_2: Obj = {foo: 20};

// const { foo = 500 } = ob_1;

const rest_obj = {
    foo: 123,
    bar: "string",
    baz: false,
};

const { foo, ...restObj } = rest_obj;


console.log(foo === rest_obj.foo);

restObj.bar = "text";
console.log(rest_obj.bar)