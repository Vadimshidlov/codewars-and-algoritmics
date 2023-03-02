'use strict';
//Деструктурирующее присваивание
/*

let arr = ["Vadim", "Shidlov"];

let [name, surName] = arr;

console.log("Name: " + name, "; Surname: " + surName);

console.log("====");
*/

//вариант разбивки с использованием метода split
/*

let [name, surName] = 'Vadim Shidlov'.split(' ');
console.log(name, surName);
*/

/*const arr = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
const [first, , third] = arr;
console.log(first, third);

let [a, b, c] = 'abc';
console.log(a, b, c);*/
//Присваивайте чему угодно с левой стороны

/*
let user = {};
[user.name, user.surname] = 'Vadim Shidlov'.split(' ');

console.log(user.surname);
*/

//трюк обмена переменных
/*let name1 = 'Vadim';
let name2 = 'Pasha';
[name1, name2] = [name2, name1];
console.log(name1, name2);*/

//остаточные переменные
/*
const arr = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic', '123', 456];

let [first, , second, ...rest] = arr;
console.log(first, second);
console.log(rest);
*/

/*
function args(a, b, c) {
    let [one, two, three, four = 'myNumber'] = arguments;
    console.log(one, two, three, four);
}

console.log(args(1, 2, 3));
*/

//Деструктуризация объекта
/*
let options = {
    title: 'Menu',
    width: 100,
    height: 200,
};

/!*let { width, title, height } = options;
console.log(title);
console.log(width);
console.log(height);*!/
let { width: w, height: h, title } = options; // если хочется переименовать переменные
console.log(w);
console.log(h);
console.log(title);
*/
/*

let user = {
    name: 'John',
    years: 30,
};

let { name, years: age, isAdmin = false } = user;
console.log(name, age, isAdmin);
*/
/*
let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    for (let [name, cash] of Object.entries(salaries)) {
        if (max < cash) {
            max = cash;
            maxName = name;
        }
    }
    return maxName;
}

console.log(topSalary(salaries));
*/

//Object Date
/*

let data = new Date('2023-02-28');
console.log(data);

let data2 = new Date();
console.log(data2);
console.log(data2.getFullYear());
console.log(`0${data2.getMonth() + 1}`);
console.log(data2.getDate());
*/
// Function new LEVEL
//Остаточные параметры и оператор расширения
/*function sumOfAll(...args) {
    let sum = 0;
    for (let el of args) sum += el;
    return sum;
}

console.log(sumOfAll(1, 2, 3, 4, 5, 6));*/

/* function sumOfAll(a, b, ...args) {
    let c = a + b;
    let sArgs = args.reduce((acc, el) => {
        acc += el;
        return acc;
    }, 0);
    return `Сумма прямых параметров равна: ${c}, а сумма параметров из массива равна: ${sArgs}`;
}

console.log(sumOfAll(1, 2, 2, 4, 4)); */

//Оператор расширения

// something about currying
/* function sum(n1) {
    let s = n1;
    function next(n2) {
        if (n2 !== undefined) {
            s += n2;
            return next;
        }
        return s;
    }
    return next;
}

console.log(sum(1)(2)(3)(3)()); */

/*function currying(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

function sum(a, b) {
    return a + b;
}

let curry = currying(sum);
console.log(curry(3)(3));*/

/*function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log(multiply(1)(2)(3));*/

/*function discount(discount) {
    return function (price) {
        return price * discount;
    };
}

const tenPercentDisc = discount(0.1);
console.log(tenPercentDisc(500));*/

// Планирование: setTimeout и setInterval

/*function hello() {
    console.log('hello, world');
}

setTimeout(hello, 1000);*/

/*function sum(a, b) {
    return console.log(a + b);
}

setTimeout(sum, 1000, 2, 5);*/
/*let timerId = setInterval(() => console.log('hello'), 1000);
setTimeout(() => {
    clearInterval(timerId);
}, 5100);*/
/*
let count = 0;
let timerId = setTimeout(function tick() {
    console.log(count++);
    timerId = setTimeout(tick, 1000); // (*)
}, 2000);
*/

/*function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

console.log(printNumbers(1, 3));*/

// более точная задержка

/*function myName(name, surName) {
    console.log(`${name}, ${surName}`);
    setTimeout(myName, 1000, name, surName);
}

setTimeout(myName, 1000, 'Vadim', 'Vitebskyi');*/

// let str = 'hsi  etTi sats!';
// const arr = str.split('');
// const res = [];

// const res1 = [];
// const res2 = [];
// console.log(arr);
// go: for (let i = Math.round(arr.length / 2 - 1); i < arr.length; i++) {
//     res.push(arr[i]);
//     let k = 0;
//     for (; k < Math.round(arr.length / 2 - 1); ) {
//         res.push(arr[k]);
//         continue;
//     }
//     k++;
// }
//
// console.log(res);

/* for (let i = 0; i < Math.round(arr.length / 2 - 1); i++) {
    res1.push(arr[i]);
}
for (let i = Math.round(arr.length / 2 - 1); i < arr.length; i++) {
    res2.push(arr[i]);
}

console.log(res1, res2);
go: for (let i = 0; i < res2.length; i++) {
    res.push(res2[i]);
    for (let j = i; j < res1.length; j++) {
        res.push(res1[j]);
        break;
    }
}

console.log(res.join('')); */

const obj = { '.mp3': 2, '.wav': 1, '.als': 2, '.ps': 1 };
let res = [];
let countTwo = Math.max(...Object.values(obj));
console.log(countTwo);
for (let key in obj) {
    if (obj[key] === countTwo) {
        res.push(key);
    }
}
console.log(res);

// =====


