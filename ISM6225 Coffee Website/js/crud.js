document.getElementById('sales-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    const table = document.getElementById('sales-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${item}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td>
            <button onclick="editRow(this)">Edit</button>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    // Clear the form
    document.getElementById('sales-form').reset();
});

function editRow(button) {
    const row = button.parentNode.parentNode;
    const item = row.cells[0].innerText;
    const quantity = row.cells[1].innerText;
    const price = row.cells[2].innerText;

    document.getElementById('item').value = item;
    document.getElementById('quantity').value = quantity;
    document.getElementById('price').value = price;

    row.remove();
}

function deleteRow(button) {
    button.parentNode.parentNode.remove();
}
