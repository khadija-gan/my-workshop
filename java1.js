document.addEventListener ('DOMContentLoaded', () => {
    const updateTotalPrice = () => {
        const totalPriceElement = document.querySelector( '.total' );
        const prices = Array.from(document.querySelectorAll('.unit-price'));
        const quantities = Array.from(document.querySelectorAll (' .quantity' ));

    const total = prices.reduce ((sum, priceElem, index) => {
        const price = parseFloat(priceElem.textContent.replace('$', ''));
        const quantity = parseInt (quantities[index].textcontent);
        return sum + (price * quantity);
}, 0);


     totalPriceElement.textcontent = `${total.toFixed(2)} $` ;
};

document.querySelectorAll('.card').forEach(card => {
       const minusButton = card.querySelector('.fa-minus-circle');
       const plusButton = card.querySelector('.fa-plus-circle');
       const heartButton = card.querySelector('.fa-heart');
       const trashButton = card.querySelector ('.fa-trash-alt');
       const quantitySpan = card.querySelector('.quantity');
       const unitprice = parseFloat(card.querySelector('.unit-price').textcontent.replace('$' , ''));

let quantity = parseInt(quantitySpan.textContent);

minusButton.addEventListener('click',() => {
  if (quantity > 0) {
     quantity--;
     quantitySpan.textContent = quantity;
    }
});

plusButton.addEventListener('click', () => {
    quantity++;
    quantitySpan.textContent = quantity;
    updateTotalPrice();
});

heartButton.addEventListener('click', () => {
    heartButton.classList.toggle('liked');
    heartButton.style.color = heartButton.classList.contains('liked') ? 'red' : 'black';
 });

trashButton.addEventListener('click' , () => {
    card.remove();
   updateTotalPrice();
 });

});
});







