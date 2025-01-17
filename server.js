<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ice Pops Shop</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to the Ice Pop Shop</h1>
    </header>

    <main>
        <h2>Our Ice Pops</h2>
        <div class="product-list" id="icePopList">
            <!-- Products will be inserted dynamically -->
        </div>

        <h2>Your Cart</h2>
        <div id="cart">
            <p>Your cart is empty</p>
        </div>

        <h2>Checkout</h2>
        <div id="checkout">
            <label for="customerName">Your Name:</label>
            <input type="text" id="customerName" placeholder="Enter your name">
            <button id="payButton">Pay Now</button>
        </div>
    </main>

    <footer>
        <p>&copy; 2024 Ice Pop Shop. All Rights Reserved.</p>
    </footer>

    <script src="index.js"></script><h2>Checkout</h2>
    <div id="checkout">
        <label for="customerName">Your Name:</label>
        <input type="text" id="customerName" placeholder="Enter your name"><br><br>
    
        <label for="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" placeholder="Enter your M-Pesa number"><br><br>
    
        <button id="payButton">Pay with M-Pesa</button>
    </div>
    

</body>
</html>
