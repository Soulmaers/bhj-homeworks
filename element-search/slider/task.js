
const sliderItem = document.querySelectorAll('.slider__item');
const sliderArrownext = document.querySelector('.slider__arrow_next');
const sliderArrowprev = document.querySelector('.slider__arrow_prev');

const arr = Array.from(sliderItem);

sliderArrowprev.onclick = function () {
    i = arr.findIndex((element) => {
        return element.classList.contains('slider__item_active')
    });
    arr[i].classList.remove('slider__item_active');
    i = (i > 0) ? i - 1 : arr.length - 1;
    arr[i].classList.add('slider__item_active');
}

sliderArrownext.onclick = function () {
    i = arr.findIndex((element) => {
        return element.classList.contains('slider__item_active')
    });
    arr[i].classList.remove('slider__item_active');
    i = (i + 1) % arr.length;
    arr[i].classList.add('slider__item_active');

}




