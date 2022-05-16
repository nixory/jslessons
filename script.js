"use strict";


const obj = {
    name: "John",
    age: 25,
    isMarried: true
};

// console.log(obj.name)

console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpeg', 'apple.bmp', 6, {},
    []
];

console.log(arr[1]);

let zopa = 9,
    pizda = 10;

zopa++;
pizda--;
console.log(zopa, pizda);


if (4 == 9) {
    console.log('ok')
} else {
    console.log('loh')
};

let num = 50;
if (num < 49) {
    console.log('error')
} else if (num > 100) {
    console.log('mnogo')

} else {
    console.log('ok')
};

(num === 50) ? console.log('ok'): console.log('error');

const pum = 50;
switch (pum) {
    case 49:
        console.log('neverno');
        break;
    case 100:
        console.log('neverno');
        break;
    case 52:
        console.log('pravda');
        break;
    default:
        console.log('ti loh');
        break;

}

let lum = 50;
// while (lum <= 55) {
//     console.log(lum);
//     lum++;
// } 

// do {
//     console.log(lum);
//     lum++;
// }
// while (lum < 55);


for (let i = 1; i < 8; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);

}
let kum = 10;

function showFirstMsg(text) {
    console.log(text);
    let kum = 20;
    console.log(kum);
}

showFirstMsg();
console.log(kum);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calca = (a, b) => { return a + b };

"use strict";

const str = "test";

console.log(str.toUpperCase());

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

function first(){
    setTimeout(function() {
        console.log(1)
    }, 500); // timeout 
}
function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function(){
    console.log('YEAASDSA');
});