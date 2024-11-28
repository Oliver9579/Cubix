const l1 = (input) => {
    console.log(input.split("").reverse().join(""));
}

l1("apple");

const l2 = (input, i1, i2) => {
    if (isNaN(i1) || isNaN(i2)) {
        console.log("Give numbers in the second and third parameters!")
    } else {
        const sbtr = input.substring(i1, i2);
        console.log(sbtr + sbtr);
    }
}

l2("apple", 0, 3);

const l3 = (input) => {
    const result = [];

    input.forEach((num) => {
        num % 2 === 0 ? result.push(num) : '';
    })
    console.log(result)
}

l3([1, 2, 3, 4, 5])

const l4 = (input) => {
    const result = [];
    input.split("").forEach(((num) => {
        !isNaN(num) ? result.push(num) : "";
    }))
    console.log(result)
}

l4('ap1ple93')

const l5 = (num1) => {
    return (num2) => {
        return num1 * num2;
    };
}

const multiplier = l5(10);
const result = multiplier(5);
console.log(result);

const l6 = (num) => {
    switch (true) {
        case (num > 0 && num <= 50):
            console.log(1);
            break;
        case (num >= 51 && num <= 60):
            console.log(2);
            break;
        case (num >= 61 && num <= 70):
            console.log(3);
            break;
        case (num >= 71 && num <= 85):
            console.log(4);
            break;
        case (num >= 86 && num <= 100):
            console.log(5);
            break;
        default:
            console.log("Give a valid num!");
    }
};

l6(70)
// const l6 = (num) => {
//     if (num > 0 && num <= 50) {
//         console.log(1);
//     } else if (num >= 51 && num <= 60) {
//         console.log(2);
//     } else if (num >= 61 && num <= 70) {
//         console.log(3);
//     } else if (num >= 71 && num <= 85) {
//         console.log(4);
//     } else if (num >= 86 && num <= 100) {
//         console.log(5);
//     } else {
//         console.log("Give a valid num!");
//     }

// };

const l7 = (num) => {
    if (num <= 0) {
        throw new Error('Not valid input')
    } else {
        console.log(Math.floor((Math.random() * num) + 1))
    }
}
// try {
//     l7(0)
// } catch (e) {
//     console.error(e)
// }

const l9 = (input) => {
    const result = `${input.firstName} ${input.lastName}`
    delete input.firstName;
    delete input.lastName;
    input.name = result
    return input;
}

const person = {
    firstName: "Olivér",
    lastName: "Szabó-Temple",
}

console.log(l9(person))

const l10 = (input, num) => {
    let i = 0;
    let result = ""
    while (i < num) {
        result += input;
        i++;
    }
    return result
}

console.log(l10('apple', 3))


