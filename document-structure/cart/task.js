const product = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

const productQualDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productQualInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const productValue = Array.from(document.querySelectorAll('.product__quantity-value'));
const buttonAdd = Array.from(document.querySelectorAll('.product__add'));

productQualDec.forEach(el => {
  el.addEventListener('click', () => {
    let index = productQualDec.indexOf(el);
    if (productValue[index].textContent > 1) {
      productValue[index].textContent--;
    }
  })
})
productQualInc.forEach(el => {
  el.addEventListener('click', () => {
    let index = productQualInc.indexOf(el);
    productValue[index].textContent++
  })
})
buttonAdd.forEach(el => {
  el.addEventListener('click', () => {
    let index = buttonAdd.indexOf(el);
    let val = productValue[index].textContent
    let dataId = product[index].dataset.id;
    let image = product[index].children[1].getAttribute("src");
    let cartProduct = Array.from(cart.children);
    const products = cartProduct.find((item) => item.dataset.id === dataId);
    if (!products) {
      cart.insertAdjacentHTML(
        "afterBegin",
        `<div class="cart__product" data-id=${dataId}>
        <img class="cart__product-image" src=${image}>
        <div class="cart__product-count">${val}</div></div>`
      );
    } else {
      let count = products.querySelector('.cart__product-count');
      let newCount = Number(count.textContent) + Number(val);
      count.innerText = newCount;
    }
  })
})