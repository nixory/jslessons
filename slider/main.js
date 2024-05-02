
const slides = document.querySelectorAll('.slide')
let i = 0;
function slider() {


    slides[i].classList.add('active');
    if (i !== 0) {
        slides[i - 1].classList.remove('active');
    } else {
        slides[slides.length - 1].classList.remove('active');
    }
    console.log([slides[i]])
    console.log(i)
    i++;
    if (i >= slides.length ) {
       i=0;
    }

}

document.querySelector(".next").onclick = slider;
