// Ice Pop Data
const icePops = [
    {
        name: "Strawberry Delight",
        flavor: "Strawberry",
        color: "Red",
        price: 15,
        img: "https://via.placeholder.com/200x200?text=Strawberry+Pop"
    },
    {
        name: "Blueberry Blast",
        flavor: "Blueberry",
        color: "Blue",
        price: 15,
        img: "https://via.placeholder.com/200x200?text=Blueberry+Pop"
    },
    {
        name: "Lemon Zest",
        flavor: "Lemon",
        color: "Yellow",
        price: 15,
        img: "https://via.placeholder.com/200x200?text=Lemon+Pop"
    },
    {
        name: "Minty Fresh",
        flavor: "Mint",
        color: "Green",
        price: 15,
        img: "https://via.placeholder.com/200x200?text=Mint+Pop"
    }
];

let cart = [];

// Render Ice Pop Products
function renderIcePops() {
    const icePopList = document.getElementById('icePopList');
    icePops.forEach((pop, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${pop.img}" alt="${pop.name}">
            <h3>${pop.name}</h3>
            <p>Flavor: ${pop.flavor}</p>
            <p>Color: ${pop.color}</p>
            <p>Price: KES${pop.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        icePopList.appendChild(productDiv);
    });
}

// Add to Cart
function addToCart(index) {
    const selectedPop = icePops[index];
    cart.push(selectedPop);
    updateCart();
}

// Update Cart
function updateCart() {
    const cartDiv = document.getElementById('cart');
    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty</p>";
    } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartDiv.innerHTML = `
            <ul>
                ${cart.map(item => `<li>${item.name} - KES${item.price.toFixed(2)}</li>`).join('')}
            </ul>
            <p>Total: KES${total.toFixed(2)}</p>
        `;
    }
}

// Basic Payment Simulation
document.getElementById('payButton').addEventListener('click', () => {
    const name = document.getElementById('customerName').value;
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else if (!name) {
        alert("Please enter your name.");
    } else {
        alert(`Thank you ${name}, your payment of KES${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)} has been processed!`);
        cart = [];
        updateCart();
        document.getElementById('customerName').value = '';
    }
});

// Initialize the page
renderIcePops();
