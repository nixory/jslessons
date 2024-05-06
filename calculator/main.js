let btns = document.querySelectorAll('.calc-num')
let btns2 = document.querySelectorAll('.calc-it')

btns2.forEach((elem) => {
    elem.onclick = func4;
})
btns.forEach((elem) => {
    elem.onclick = func3;
})

// let out = '';
// let oper = 0;
// let temp = 0;
// function deleteStr(store) {
//     console.log(store)
//     store = 0;
// }
// function func(elem) {
//
//     out += parseInt(elem.srcElement.innerHTML)
//     temp = parseInt(out);
//
//     document.querySelector('.out').innerHTML = out;
// }
// function func2(elem) {
//     out = ''
//     document.querySelector('.out').innerHTML = out;
//     switch (elem.srcElement.innerHTML) {
//         case "+":
//
//             oper += temp;
//             out += oper
//
//             break;
//         case "-":
//             oper -= out;
//             break;
//         case "/":
//             oper /= out;
//             break;
//         case "=":
//             document.querySelector('.out').innerHTML = temp;
//             break;
//         default:
//             oper = out;
//             break;
//     }
//
//
// }

let p3 = '';
let p1 ='';
let p2 ='';
let tempP =0;
let tempP3 = 0;
let out = '';
let res = 0;
function func3 (elem) {
    if (p2 == '') {
        p1 += elem.srcElement.innerHTML

    }
    if (p2 !== '') {
        p3 += elem.srcElement.innerHTML
    }
    console.log(p3)



    // console.log(parseInt(p1))

}


function func4(elem) {

    if (p2 == '' && p2 !== "=" && p2.length < 1) {
        p2 += elem.srcElement.innerHTML
        tempP += parseInt(p1);



        p1 = ''

        console.log(p2)
    }
    else {
        switch (p2) {
            case "+":
                tempP3 += parseInt(p3);
                p3 = ''

                res = parseInt(tempP) + parseInt(tempP3)
                p2 = ''
                console.log(parseInt(res))
                break;
            case "-":
                tempP3 += parseInt(p3);
                p3 = ''

                res = parseInt(tempP) - parseInt(tempP3)
                console.log(parseInt(res))
                p2 = ''
                break;
            case "*":
                tempP3 += parseInt(p3);
                p3 = ''

                res = tempP * tempP3
                p2 = ''
                console.log(parseInt(res))

                break;
            case "/":
                tempP3 += parseInt(p3);
                p3 = ''
                res = tempP / tempP3
                p2 = ''
                console.log(parseInt(res))
                break;
        }
    }

}