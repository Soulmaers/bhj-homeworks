const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(el => {
    el.addEventListener('click', tooltip);
})

function tooltip() {
    const tooltipActive = document.getElementsByClassName('tooltip_active')[0];
    event.preventDefault();

    const tooltipEl = document.createElement('div');
    tooltipEl.classList.add('tooltip', 'tooltip_active');
    tooltipEl.textContent = this.getAttribute('title');
    const position = this.getBoundingClientRect();
    tooltipEl.style.top = position.bottom + 'px';
    tooltipEl.style.left = position.left + 'px';
    document.body.append(tooltipEl);

    if (tooltipActive !== undefined) {
        tooltipActive.classList.remove('tooltip_active');
        if (tooltipActive.textContent == this.title) {
            return false;
        }
    }

}

