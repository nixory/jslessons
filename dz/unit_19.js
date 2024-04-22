
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    document.querySelector('.out-1').innerHTML = document.querySelector('.div-1').innerHTML
}

document.querySelector('.div-1').onclick = t1;

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(e) {
    document.querySelector('.out-2').innerHTML = e.altKey
}
document.querySelector('.div-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
    w3 += 5;
    console.log(w3)
    document.querySelector('.div-3').style.width = `${w3}px`;
    document.querySelector('.out-3').innerHTML = `${w3}px`;
}
document.querySelector('.div-3').onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    document.querySelector('.out-4').innerHTML = document.querySelector('.div-4').innerHTML
}
document.querySelector('.div-4').ondblclick = t4;

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
    let block = document.querySelector('.div-5');
    if (block.classList.contains('active')) {
        block.classList.remove('active')
    }
    else {
        block.classList.add ('active')
    }
}
document.querySelector('.div-5').ondblclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    let block = document.querySelector('.div-6');
    let ul = document.querySelector('.ul-6');
    // if (ul.classList.contains('hide')) {
    //     ul.classList.remove('hide')
    // }
    // else {
    //     ul.classList.add ('hide')
    // }
    ul.classList.toggle('hide')
}
document.querySelector('.div-6').ondblclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
    document.querySelector('.div-7').classList.toggle('active')
}
document.querySelector('.div-7').addEventListener("contextmenu", t7)
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
    document.querySelector('body').addEventListener("contextmenu",  (e) => {
        e.preventDefault();
    })
}
document.querySelector('.ch-8').onchange = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {

    document.querySelector('.div-9 img').setAttribute('src', 'img/2.png')
}
document.querySelector('.div-9').addEventListener("contextmenu", t9)
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    document.querySelector('.div-10 img').setAttribute('src', 'img/2.png')
}
document.querySelector('.div-10').addEventListener("mouseenter", t10)
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11() {

    let image = document.querySelector('.div-11 img')
    let startImage = image.src;

    image.addEventListener("mouseenter", () => {
        image.src = 'img/2.png'
    })
    image.addEventListener('mouseleave', () => {
        image.src = startImage
    })
}
document.addEventListener("DOMContentLoaded", t11)
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

// () => {

// }
document.querySelector('.div-12').addEventListener("mousedown", () => {

    document.querySelector('.div-12').classList.add('active')
})
// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

// () =>  {

document.addEventListener('DOMContentLoaded', () => {
    let div = document.querySelector('.div-13')
    div.addEventListener("mousedown", () => {
        div.classList.add('active')
    })
    div.addEventListener("mouseup", () => {
        div.classList.remove('active')
    })
})

// }

// () =>  {

// }
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    document.querySelector('.div-14').onclick = () => {
        document.querySelector('.div-14').classList.add('active')
    }
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let move = 1;
function t15() {
    move++;

    document.querySelector('.div-15').innerHTML = `${move}`;
}
document.querySelector('.div-15').addEventListener("mousemove", t15)
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let w = document.querySelector('.div-16').style.width;
function t16() {
    console.log(document.querySelector('.div-16').style.width)
    w++;
    document.querySelector('.div-16').style.width = `${w}px`;
}
document.querySelector('.div-16').addEventListener("mousemove", t16)
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    document.querySelector('.div-16').addEventListener("mousemove", t16)
}
function t17Off() {
    document.querySelector('.div-16').removeEventListener("mousemove", t16)
}
document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;

// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

document.querySelector('.div-18').addEventListener('mouseenter', (e) => {
   e.currentTarget.innerHTML = document.querySelector('.div-18').offsetWidth
})
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

document.querySelector('.div-19').addEventListener("mouseout", (e) => {
    console.log(20)
    e.currentTarget.innerHTML = e.currentTarget.classList
})
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

document.querySelector('progress').addEventListener("mousemove", (e) => {
    e.currentTarget.value++
})
// ваше событие здесь!!!