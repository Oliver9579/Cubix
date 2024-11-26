let myFirstVar = 'Hello';
myFirstVar = 5;

const onlyOnce = 'Word1'
// onlyOnce = 'Hello'

let age = 23;
const text = `I am ${age} years old`;
const text2 = 'I am ' + age + ' years old';

const n1 = 5;
const n2 = 3.44
const n3 = Number('3');
const n4 = Number('vmi');

let isValid = true;

let num = 5;

const foo = (n) => {
    n = n * 2;
    return n;
}

num = foo(num);

const o = {
    name: 'Oli',
    favoriteNumber: 7
};

const a1 = [1, 2, 3];
const a2 = [1, 'Oli', true];

a1.push(23);
a1.forEach((nums) => {
    console.log(nums);
})
const f = (a, b) => {
    return a + b;
};

console.log(f('vmi', 'vmi2'));

let pet = {
    name: 'Kitty',
    type: 'cat'
};

const bar = p => {
    p = {
        name: 'Doggy',
        type: 'dog'
    }
    return p;
};

console.log('valtozo erteke a fuggveny hivas elott', pet)
pet = bar(pet)
console.log('valtozo erteke a fuggveny hivas elott', pet)

const pet2 = {
    name: 'Sammy',
    type: 'snake'
}

const bar2 = p => {
    p.name = 'Hammy'
    p.type = 'hamster'
};

console.log('valtozo erteke a fuggveny hivas elott', pet2)
bar2(pet2)
console.log('valtozo erteke a fuggveny hivas elott', pet2)

let v;

const a = '5';
const b = 5

console.log(a === b)

const p1 = {name: 'Oli'};
const p2 = {name: 'Oli'};

console.log(p1 === p2)
console.log(p1 == p2)

const p3 = p1;

console.log(p1 === p3)

let d = 5;
d = 'vmi'

const makeClosure = () => {
    const name = 'Closure';
    const displayName = () => {
        alert(name);
    }
    return displayName;
}

const isPositive = (n) => {
    if (n > 0) {
        console.log(true)
    } else {
        console.log(true)
    }
}

isPositive(5)
isPositive(-5)


const isTruthy = v => {
    if (v) {
        console.log('Truthy');
    } else {
        console.log('Falsy');

    }
}

isTruthy({});
isTruthy('');
