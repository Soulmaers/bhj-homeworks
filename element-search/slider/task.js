
const sliderItem = document.querySelectorAll('.slider__item');
const sliderArrownext = document.querySelector('.slider__arrow_next');
const sliderArrowprev = document.querySelector('.slider__arrow_prev');

let slider = 0;

sliderArrownext.onclick = () => {
    slider++;
    let sliders = Array.from(sliderItem);
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].className = 'slider__item';
    }
    if (slider >= sliderItem.length) {
        slider = 0;
    }
    sliderItem[slider].className = 'slider__item slider__item_active';
}

sliderArrowprev.onclick = () => {
    slider--;
    let sliders = Array.from(sliderItem);
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].className = 'slider__item';
    }
    if (slider < 0) {
        slider = sliderItem.length - 1;
    }
    sliderItem[slider].className = 'slider__item slider__item_active';
}