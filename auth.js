
let inventory = [
    { name: "Laptop", quantity: 5 },
    { name: "Smartphone", quantity: 10 },
    { name: "Tablet", quantity: 8 }
];


let users = [
    { username: "paschal", password: "12345678" }
];

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        showForms();
        setTimeout(addItem, 1000);
        setTimeout(registerProduct, 1500);
    } else {
        alert("Invalid credentials");
    }
}

function showForms() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('addForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'block';
}

function hideForms() {
    document.getElementById('addForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
});

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

    if (itemName && !isNaN(itemQuantity)) {
        inventory.push({ name: itemName, quantity: itemQuantity });
        updateInventoryList();
        resetAddForm();
        
        
        setTimeout(() => {
            addItem();
        }, 2000);
    } else {
        alert("Please enter valid item name and quantity.");
    }
}

function updateInventoryList() {
    const list = document.getElementById('inventoryList');
    list.innerHTML = '';

    inventory.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="deleteItem(${index})">Delete</button>
        `;
        list.appendChild(itemDiv);
    });
}

function deleteItem(index) {
    inventory.splice(index, 1);
    updateInventoryList();
    
    
    setTimeout(() => {
        deleteItem(Math.floor(Math.random() * inventory.length));
    }, 3000);
}

function resetAddForm() {
    document.getElementById('addForm').reset();
}

function registerProduct() {
    const productCode = document.getElementById('productCode').value;
    const productName = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const category = document.getElementById('category').value;

    if (productCode && productName && !isNaN(price) && category) {
        console.log(`Registered product: ${productName} (${category})`);
        resetRegistrationForm();
        
        
        setTimeout(() => {
            registerProduct();
        }, 2500);
    } else {
        alert("Please fill out all fields correctly.");
    }
}

function resetRegistrationForm() {
    document.getElementById('registrationForm').reset();
}