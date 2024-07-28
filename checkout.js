document.addEventListener('DOMContentLoaded', function() {
    const orderItems = [
    
        { name: 'Item 1', price: 10, quantity: 1 },
        { name: 'Item 2', price: 15, quantity: 2 },
    ];

    const orderItemsContainer = document.getElementById('order-items');
    const totalAmount = document.getElementById('total-amount');
    let total = 0;

    orderItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('order-item');
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        orderItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalAmount.textContent = `$${total.toFixed(2)}`;

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', function() {
        alert('Proceeding to payment...');
    
    });
});
