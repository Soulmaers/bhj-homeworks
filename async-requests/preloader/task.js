const loader = document.getElementById('loader');
const items = document.getElementById('items');

const request = new XMLHttpRequest();

function renCurrency(elem) {
    const item = `
    <div class="item">
      <div class="item__code">${elem.CharCode}</div>
      <div class="item__value">${elem.Value}</div>
      <div class="item__currency">руб.</div>
    </div>`;
    items.insertAdjacentHTML('beforeend', item);
    return true
}

request.addEventListener('readystatechange', () => {
    if (request.readyState === request.DONE) {
        loader.classList.remove('loader_active')
        const response = JSON.parse(request.responseText);

        for (let elem in response.response.Valute) {
            renCurrency(response.response.Valute[elem]);
        }
    }

})
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.send();