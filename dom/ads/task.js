const rotatorCase = document.querySelectorAll('.rotator__case');
const rotate = Array.from(rotatorCase);
let element = rotate.findIndex((i) =>
    i.classList.contains('rotator__case_active')
);
setInterval(() => {
    rotate[element].classList.remove('rotator__case_active');
    element++;
    if (element == rotate.length) {
        element = 0;
    }
    rotate[element].classList.add('rotator__case_active');
    rotate[element].style.color = rotate[element].dataset.color;
}, 1000);