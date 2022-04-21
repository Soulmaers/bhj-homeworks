const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(el => {
    el.addEventListener('click', tooltip);
})

function tooltip(event) {
    const tooltipActive = document.getElementsByClassName('tooltip_active')[0];
    event.preventDefault();

    if (tooltipActive !== undefined) {
        tooltipActive.classList.remove('tooltip_active');
        if (tooltipActive.textContent == this.title) {
            return false;
        }
    }

    const tooltipEl = document.createElement('div');
    tooltipEl.classList.add('tooltip', 'tooltip_active');
    tooltipEl.textContent = this.getAttribute('title');
    const position = this.getBoundingClientRect();
    tooltipEl.style.top = position.bottom + 'px';
    tooltipEl.style.left = position.left + 'px';
    document.body.append(tooltipEl);




}


/*const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

tooltips.forEach(tooltip => {
   const elem = document.createElement('div');
   elem.textContent = tooltip.title;

   tooltip.addEventListener("click", (e) => {
      e.preventDefault();
      elem.classList.add("tooltip");
      tooltip.insertAdjacentElement('beforeBegin', elem);
      elem.style.position = "absolute";
      elem.style.left = `${tooltip.getBoundingClientRect().left}px`;
      elem.style.top = `${tooltip.getBoundingClientRect().bottom}px`;

      const elems = Array.from(document.querySelectorAll(".tooltip_active"));
      const findElem = elems.find(elem => elem.classList.contains("tooltip_active"));

      if (findElem === undefined) {
         elem.classList.add("tooltip_active");
      } else {
         if (findElem !== elem) {
            elem.classList.add("tooltip_active");
         }
         findElem.classList.remove("tooltip_active");
      }
   }
   )
})*/

/*let hint = document.querySelector('.tooltip');
            hint.classList.toggle('tooltip_active');
            if(hint.innerText !== event.currentTarget.getAttribute('title')){
                hint.innerText = event.currentTarget.getAttribute('title');
                hint.classList.add('tooltip_active');
            }
            hint.style.left = event.currentTarget.getBoundingClientRect().left + 'px';
            hint.style.top = event.currentTarget.getBoundingClientRect().bottom + 'px';
            return false;
        };*/