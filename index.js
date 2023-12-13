// let a = 7;
// let b = 9;
//
// console.log(a * b)
// let c = 7;
// let d = 9;
// console.log(c /d );
// let e = 3;
// let f = 5;
// console.log(e + f  );
//
// let e1 = '3';
// let f1 = 5 ;
// console.log(e1 + f1);
//
// let e2 = 3; let f2 = 0;
// console.log(e2 / f2)
//
// let e3 = 3; let f3 = 'Hello';
// console.log(e3 + f3)
//
// let e4 = 3; let f4 = 'Hello';
// console.log(e2 * f2)
//
//
//
// let name = document.querySelector('.name');
// let surname = document.querySelector('.surname');
// let one = document.querySelector('.one');
// let two = document.querySelector('.two');
// let btn = document.querySelector("button");
// let output = document.querySelector("h2");
// // btn.onclick = function () {
// //     let nameValue = name.value;
// //     let surnameValue = surname.value;
// //     output.innerHTML = 'Hello' + ' ' + nameValue + ' ' +  surnameValue;
// //     name.value = surname.value = "";
// // }
//
// // btn.onclick = function () {
// //     let nameValue = name.value;
// //     let surnameValue = +surname.value;
// //
// //     console.log(+nameValue)
// //     name.value = surname.value = "";
// // }
//
// let y = document.querySelector('.sevenseven');
// y.style.border = '2px solid red';
//
// btn.onclick = function () {
//     let t = one.value;
//     t = parseInt(t)
//     console.log(t)
//     t.value = "";
// }


// let btn = document.querySelector("button");
//
// btn.onclick = function () {
//     let userName = document.querySelector('.name').value;
//     let userSurname = document.querySelector('.surname').value;
//     let userAge = document.querySelector('.age').value;
//     let userHobby = document.querySelector('.hobby').value;
//     document.querySelector("h2").innerHTML = 'Уважаемый ' + userName + ', ' + userSurname
//         + ', ваш возраст ' + userAge + ' года, ваше хобби: ' + userHobby;
// }

///// lesson 2


let btn = document.querySelector("button");
let input = document.querySelector('.i-1');
let h = document.querySelector("h2");
function f1() {
    let value = +input.value;
    if (value == 4 ) {
        h.innerHTML = true;

    }
    else {
        h.innerHTML = false;
    }


}

btn.onclick = f1;