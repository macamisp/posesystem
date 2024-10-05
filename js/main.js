let menuItems = [ 
    // B serious is burger
    { id: 'B1001', name: 'Classic Burger', category: 'Burgers', price: 750, discount: 0, image: 'B1.jpg' },
    { id: 'B1002', name: 'Classic Burger Regular', category: 'Burgers', price: 1500, discount: 15, image: 'B2.jpg' },
    { id: 'B1003', name: 'Turkey Burger' , category: 'Burgers' , price: 1600, discount:0, image: 'B3.jpg' },
    { id: 'B1004', name: 'Chiken Burger Large' , category: 'Burgers' , price: 1400, discount:0, image: 'B4.jpg' },
    { id: 'B1005', name: 'Chicken Burger Regular' , category: 'Burgers' , price: 800, discount:20, image: 'B5.jpg' },
    { id: 'B1006', name: 'Cheese Burger Large' , category: 'Burgers' , price: 1000, discount:0, image: 'B6.jpg' },
    { id: 'B1007', name: 'Cheese Burger Regular' , category: 'Burgers' , price: 600, discount:0, image: 'B7.jpg' },
    { id: 'B1008', name: 'Bacon Burge' , category: 'Burgers' , price: 650, discount:15, image: 'B8.jpg' },
    { id: 'B1009', name: 'Shawarma Burge' , category: 'Burgers' , price: 800, discount:0, image: 'B9.jpg' },
    { id: 'B1010', name: 'Olive Burger' , category: 'Burgers' , price: 1800, discount:0, image: 'B10.jpg' },
    { id: 'B1012', name: ' Double-Cheese Burger' , category: 'Burgers' , price: 1250, discount:20, image: 'B11.jpg' },
    { id: 'B1013', name: ' Crispy Chicken Burger Regular' , category: 'Burgers' , price: 1200, discount:0, image: 'B12.jpg' },
    { id: 'B1014 ', name: 'Crispy Chicken Burger Large' , category: 'Burgers' , price: 1600, discount:10, image: 'B13.jpg' },
    { id: 'B1014 ', name: 'Paneer Burge' , category: 'Burgers' , price: 900, discount:0, image: 'B0.jpg' },
    //S serious is submarines
    { id: 'S2001 ', name: 'Crispy Chicken Submarine Large' , category: 'Submarines' , price: 2000, discount:0, image: 'sub1.jpg' },
    { id: 'S2002 ', name: ' Crispy Chicken Submarine Regular' , category: 'Submarines' , price: 1500, discount:0, image: 'sub2.jpg' },
    { id: 'S2003 ', name: ' Chicken Submarine Large ' , category: 'Submarines' , price: 1800, discount:3, image: 'sub3.jpg' },
    { id: 'S2005 ', name: 'Chicken Submarine Regular' , category: 'Submarines' , price: 1400, discount:0, image: 'sub4.jpg' },
    { id: 'S2006 ', name: 'Grinder Submarine' , category: 'Submarines' , price: 2300, discount:0, image: 'sub5.jpg' },
    { id: 'S2007 ', name: ' Cheese Submarine' , category: 'Submarines' , price: 2200, discount:0, image: 'sub6.jpg' },
    { id: 'S2008 ', name: 'Double Cheese n Chicken Submarine' , category: 'Submarines' , price: 1900, discount:16, image: 'sub8.jpg' },
    { id: 'S2009 ', name: 'Special Horgie Submarine' , category: 'Submarines' , price: 2800, discount:0, image: 'sub9.jpg' },
    { id: 'S2010', name: 'MOS Special Submarine', category: 'Submarines', price: 3000, discount: 0, image: 'sub10.jpg' },
    //F serious is Fries
    { id: 'F3001', name: 'Steak Fries Large', category: 'Fries', price: 1200, discount: 0, image: 'f1.jpg' },
    { id: 'F3002', name: 'Steak Fries Medium', category: 'Fries', price: 600, discount: 0, image: 'f2.jpg' },
    { id: 'F3003', name: 'French Fries Large', category: 'Fries', price: 800, discount: 0, image: 'f3.jpg' },
    { id: 'F3004', name: 'French Fries Medium', category: 'Fries', price: 650, discount: 0, image: 'f4.jpg' },
    { id: 'F3005', name: 'French Fries Small ', category: 'Fries', price: 450, discount: 0, image: 'f5.jpg' },
    { id: 'F3006', name: ' Sweet Potato Fries Large', category: 'Fries', price: 600, discount: 0, image: 'f6.jpg' },
    //p serious is Pasta
    { id: 'P4001', name: 'Chicken n Cheese Pasta', category: 'Pasta', price: 1600, discount: 15, image: 'p1.jpg' },
    { id: 'P4002', name: ' Chicken Penne Pasta', category: 'Pasta', price: 1700, discount: 0, image: 'p2.jpg' },
    { id: 'P4003', name: 'Ground Turkey Pasta Bak', category: 'Pasta', price: 2900, discount: 10, image: 'p3.jpg' },
    { id: 'P4004', name: 'Creamy Shrimp Pasta', category: 'Pasta', price: 2000, discount: 0, image: 'p4.jpg' },
    { id: 'P4005', name: 'Lemon Butter Pasta', category: 'Pasta', price: 1950, discount: 0, image: 'p5.jpg' },
    { id: 'P4006', name: 'Tagliatelle Pasta ', category: 'Pasta', price: 2400, discount: 1, image: 'p6.jpg' },
    { id: 'P4007', name: 'Baked Ravioli', category: 'Pasta', price: 2000, discount: 1, image: 'p7.jpg' },
 
   
    // D B serious is Bwverages
    { id: 'D5001', name: ' Pepsi (330ml) ', category: 'Beverages', price: 990, discount: 5, image: 'D1.jpg' },
    { id: 'D5002', name: 'Coca-Cola (330ml', category: 'Beverages', price: 1230, discount: 0, image: 'D2.jpg' },
    { id: 'D5003', name: ' Sprite (330ml)', category: 'Beverages', price: 1500, discount: 3, image: 'D4.jpg' },
    { id: 'D5004', name: ' Mirinda (330ml)', category: 'Beverages', price: 850, discount: 7, image: 'D3.jpg' },
    { id: 'D5005', name: ' Ice coffee (330ml)', category: 'Beverages', price: 550, discount: 5, image: 'D5.jpg' },
    { id: 'D5006', name: ' Falooda (330ml)', category: 'Beverages', price: 750, discount: 8, image: 'D6.jpg' },
    { id: 'D5007', name: ' Choclet drink (430ml)', category: 'Beverages', price: 250, discount: 2, image: 'D7.jpg' },
    { id: 'D5008', name: ' Sweet choco (390ml)', category: 'Beverages', price: 950, discount: 18, image: 'D8.jpg' },
    { id: 'D5009', name: ' Stobery (500ml)', category: 'Beverages', price: 450, discount: 6, image: 'D9.jpg' },
    { id: 'D5010', name: ' Milk (250ml)', category: 'Beverages', price: 550, discount: 5, image: 'D10.jpg' },
    { id: 'D5011', name: ' EGB (530ml)', category: 'Beverages', price: 250, discount: 9, image: 'D11.jpg' },
    { id: 'D5012', name: ' Crem soda (330ml)', category: 'Beverages', price: 350, discount: 7, image: 'D12.jpg' },
    { id: 'D5013', name: ' Orrange(330ml)', category: 'Beverages', price: 150, discount: 2, image: 'D13.jpg' },


];

let cart = [];
let customers = [];


document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        renderCart();
    }
    renderMenuItems();

 
    const savedCustomers = localStorage.getItem('customers');
    if (savedCustomers) {
        customers = JSON.parse(savedCustomers);
        updateCustomerDropdown();
    }

   
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => filterMenuItems(tab.textContent));
    });


    const showCustomersBtn = document.querySelector('.show-customers-btn');
    if (showCustomersBtn) {
        showCustomersBtn.addEventListener('click', toggleCustomerList);
    }

    const addCustomerForm = document.querySelector('.add-customer-form');
    if (addCustomerForm) {
        addCustomerForm.addEventListener('submit', addCustomer);
    }

    
    const printBillBtn = document.querySelector('.checkout-btn');
    if (printBillBtn) {
        printBillBtn.textContent = 'Print Bill';
        printBillBtn.addEventListener('click', printBill);
    }

 
    const searchInput = document.querySelector('#searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    const addItemForm = document.querySelector('#addItemForm');
    if (addItemForm) {
        addItemForm.addEventListener('submit', handleAddItem);
    }
});

function renderMenuItems(category = null, items = menuItems) {
    const menuContainer = document.querySelector('.menu-items');
    menuContainer.innerHTML = '';

    const filteredItems = category 
        ? items.filter(item => item.category === category)
        : items;

    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');
        itemElement.innerHTML = `
            <img src="img/${item.image}" alt="${item.name}" width="200" height="180">
            <div class="item-name">${item.name}</div>
            <div class="item-price">රු${item.price.toFixed(2)}</div>
            ${item.discount > 0 ? `<div class="item-discount">${item.discount}% off</div>` : ''}
            <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
        `;
        menuContainer.appendChild(itemElement);
    });

    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => addToCart(e.target.dataset.id));
    });
}

function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const cartContainer = document.querySelector('.cart-items');
    if (!cartContainer) return;

    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">රු${(item.price * item.quantity).toFixed(2)}</div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <button class="remove-btn" data-id="${item.id}">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });

    
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const change = e.target.classList.contains('plus') ? 1 : -1;
            updateQuantity(e.target.dataset.id, change);
        });
    });

    
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            removeFromCart(e.target.dataset.id);
        });
    });

    updateCartTotal();
}

function updateCartTotal() {
    const totalElement = document.querySelector('.cart-total');
    if (!totalElement) return;

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalElement.textContent = `Total: රු${total.toFixed(2)}`;
}

function printBill() {
    const customerSelect = document.getElementById('customerSelect');
    const selectedCustomerIndex = customerSelect.value;
    const selectedCustomer = customers[selectedCustomerIndex];

    let billHTML = `
        <div class="bill-container">
            <h1>Bill</h1>
    `;

    if (selectedCustomer) {
        billHTML += `
            <h2>Customer Information</h2>
            <p><strong>Name:</strong> ${selectedCustomer.name}</p>
            <p><strong>Email:</strong> ${selectedCustomer.email}</p>
            <p><strong>Phone:</strong> ${selectedCustomer.phone}</p>
            <p><strong>Address:</strong> ${selectedCustomer.address}</p>
        `;
    }

    billHTML += `
            <h2>Order Details</h2>
            <table>
                <tr><th>Item</th><th>Quantity</th><th>Price</th><th>Total</th></tr>
    `;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        billHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>රු${item.price.toFixed(2)}</td>
                <td>රු${itemTotal.toFixed(2)}</td>
            </tr>
        `;
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    billHTML += `
            <tr>
                <td colspan="3"><strong>Total</strong></td>
                <td><strong>රු${total.toFixed(2)}</strong></td>
            </tr>
        </table>
    </div>
    `;

 
    const billContainer = document.createElement('div');
    billContainer.innerHTML = billHTML;
    billContainer.style.position = 'fixed';
    billContainer.style.top = '50%';
    billContainer.style.left = '50%';
    billContainer.style.transform = 'translate(-50%, -50%)';
    billContainer.style.backgroundColor = 'white';
    billContainer.style.padding = '20px';
    billContainer.style.border = '1px solid black';
    billContainer.style.zIndex = '1000';
    billContainer.style.maxHeight = '80vh';
    billContainer.style.overflowY = 'auto';


    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.marginTop = '10px';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(billContainer);
    });
    billContainer.appendChild(closeButton);

    
    document.body.appendChild(billContainer);
}

function updateQuantity(itemId, change) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex === -1) return;

    cart[itemIndex].quantity += change;

    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex === -1) return;

    cart.splice(itemIndex, 1);

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function addCustomer(event) {
    event.preventDefault();
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;

    const newCustomer = { name, email, phone, address };
    customers.push(newCustomer);

    
    localStorage.setItem('customers', JSON.stringify(customers));

    
    updateCustomerDropdown();
    updateCustomerList();

    
    event.target.reset();

    alert('Customer added successfully!');
}

function updateCustomerDropdown() {
    const customerSelect = document.getElementById('customerSelect');
    if (!customerSelect) return;

    
    customerSelect.innerHTML = '<option value="">-- Select a customer --</option>';

    customers.forEach((customer, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = customer.name;
        customerSelect.appendChild(option);
    });
}

function updateCustomerList() {
    const customerList = document.querySelector('.customer-list');
    if (!customerList) return;

    customerList.innerHTML = '';

    customers.forEach(customer => {
        const customerItem = document.createElement('div');
        customerItem.classList.add('customer-item');
        customerItem.innerHTML = `
            <h4>${customer.name}</h4>
            <p>Email: ${customer.email}</p>
            <p>Phone: ${customer.phone}</p>
            <p>Address: ${customer.address}</p>
        `;
        customerList.appendChild(customerItem);
    });
}

function toggleCustomerList() {
    const customerList = document.querySelector('.customer-list');
    if (customerList) {
        customerList.style.display = customerList.style.display === 'none' ? 'block' : 'none';
        updateCustomerList();
    }
}

function filterMenuItems(category) {
    if (category === 'Logout') {
        
        return;
    }
    renderMenuItems(category);
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        item.category.toLowerCase().includes(searchTerm)
    );
    renderMenuItems(null, filteredItems);
}

function handleAddItem(event) {
    event.preventDefault();
    const form = event.target;
    const newItem = {
        id: form.itemId.value,
        name: form.itemName.value,
        category: form.itemCategory.value,
        price: parseFloat(form.itemPrice.value),
        discount: parseFloat(form.itemDiscount.value),
        image: form.itemImage.value
    };
    menuItems.push(newItem);
    renderMenuItems();
    form.reset();
    alert('Item added successfully!');
}