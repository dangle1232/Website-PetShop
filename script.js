// Get all the dashboard cards
const dashboardCards = document.querySelectorAll('.dashboard-card');

// Loop through the dashboard cards and add click event listeners
dashboardCards.forEach(card => {
  card.addEventListener('click', () => {
    // Toggle the active class on the clicked card
    card.classList.toggle('active');
  });
});
// Get the order table
const orderTable = document.getElementById('orders-table');

// Get all the order rows
const orderRows = orderTable.querySelectorAll('tr');

// Loop through the order rows and calculate the total cost of each order
orderRows.forEach(row => {
  // Get the price and quantity cells
  const priceCell = row.querySelector('.price');
  const quantityCell = row.querySelector('.quantity');
  const totalCell = row.querySelector('.total');
  
  // Calculate the total cost and update the total cell
  const price = parseFloat(priceCell.textContent.replace('$', ''));
  const quantity = parseInt(quantityCell.textContent);
  const total = price * quantity;
  totalCell.textContent = '$' + total.toFixed(2);
});
// Get the inventory table
const inventoryTable = document.getElementById('inventory-table');

// Get the search input and add a keyup event listener
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', () => {
  // Get the search term and convert to lowercase
  const searchTerm = searchInput.value.toLowerCase();
  
  // Loop through the inventory rows and hide/show based on the search term
  const inventoryRows = inventoryTable.querySelectorAll('tr');
  inventoryRows.forEach(row => {
    const nameCell = row.querySelector('.name');
    const nameText = nameCell.textContent.toLowerCase();
    if (nameText.includes(searchTerm)) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
});
