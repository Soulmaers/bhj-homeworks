const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', scrollFunc);
function scrollFunc() {
    reveal.forEach((elem) => {
        let position = ({ top, bottom } = elem.getBoundingClientRect());
        if (position.top > 0 && position.bottom < window.innerHeight) {
            elem.classList.add('reveal_active');
        }
    })

}



