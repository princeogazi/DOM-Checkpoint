const cartItems = document.querySelectorAll(".cart-item");
console.log(cartItems)
cartItems.forEach((item) => {
    const priceElement = item.querySelector(".price");
    const quantityElement = item.querySelector(".count");
    const incrementBtn = item.querySelector(".increment");
    const decrementBtn = item.querySelector(".decrement");
    const removeBtn = item.querySelector(".remove");

    let quantity = parseInt(quantityElement.textContent);
    let price = parseInt(priceElement.textContent.replace('$', ''));

    const incrementTotal = () => {
        const totalAmount = document.getElementById('total-amount');
        const total = parseInt(totalAmount.textContent);
        totalAmount.textContent = total + price
    }

    const decrementTotal = () => {
        const totalAmount = document.getElementById('total-amount');
        const total = parseInt(totalAmount.textContent);
        totalAmount.textContent = total - price
    }

    incrementBtn.addEventListener('click', () => {
        quantity += 1;
        quantityElement.textContent = quantity;
        incrementTotal()
    })

    decrementBtn.addEventListener('click', () => {
        if (quantity > 0) {
            quantity -= 1;
            quantityElement.textContent = quantity;
            decrementTotal()
        }
    })

    removeBtn.addEventListener('click', () => {
        const itemTotal = price * quantity;
        const totalAmount = document.getElementById("total-amount");
        const total = parseInt(totalAmount.textContent);
        totalAmount.textContent = total - itemTotal;
        item.remove();
    })

})