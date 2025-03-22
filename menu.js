let orderItems = []; // Stores added items

// Pop-up container elements
const popupContainer = document.getElementById("popupContainer");
const closePopupBtn = document.getElementById("closePopupBtn");

// Show popup function
function showPopup(message) {
    const popupMessage = document.getElementById("popupMessage");
    popupMessage.textContent = message;
    popupContainer.style.display = "block";
}

// Close popup event
closePopupBtn.addEventListener("click", function() {
    popupContainer.style.display = "none";
});

// Add item to order
function addItemToOrder() {
    const itemSelect = document.getElementById("itemSelect");
    const quantityInput = document.getElementById("quantity");
    const orderList = document.getElementById("orderItems");

    const selectedItem = itemSelect.value;
    const quantity = parseInt(quantityInput.value);

    if (!selectedItem || quantity <= 0) {
        showPopup("Please select a valid item and quantity.");
        return;
    }

    // Add item to array
    orderItems.push({ name: selectedItem, quantity });

    // Update UI
    const li = document.createElement("li");
    li.textContent = `${selectedItem} - Quantity: ${quantity}`;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", function() {
        removeItemFromOrder(selectedItem);
        orderList.removeChild(li);
    });

    li.appendChild(removeBtn);
    orderList.appendChild(li);

    // Reset input fields
    itemSelect.value = "";
    quantityInput.value = "";
}

// Remove item from order list
function removeItemFromOrder(itemName) {
    orderItems = orderItems.filter(item => item.name !== itemName);
}

// Submit order function
function submitOrder() {
    if (orderItems.length === 0) {
        showPopup("Your order is empty. Please add items.");
        return;
    }

    // Example: Send order to backend (replace with actual implementation)
    console.log("Submitting order:", orderItems);
    showPopup("Order submitted successfully!");

    // Clear the order list
    orderItems = [];
    document.getElementById("orderItems").innerHTML = "";
}
