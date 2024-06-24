const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Burnt Espresso', 'Watered-down Cappuccino', 'Half-hearted Latte', 'Bitter Americano', 'Undissolved Mocha'],
        datasets: [{
            label: 'Sales ($)',
            data: [30, 45, 40, 25, 50],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
