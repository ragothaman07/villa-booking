document.getElementById('dateForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const dateInput = document.getElementById('date').value;
    const resultDiv = document.getElementById('result');

    // Example hardcoded booked dates
    const bookedDates = [
        '2024-06-20',
        '2024-06-21',
        '2024-06-22'
    ];

    if (bookedDates.includes(dateInput)) {
        resultDiv.innerHTML = `<p class="text-red-500">The date ${dateInput} is already booked.</p>`;
    } else {
        resultDiv.innerHTML = `<p class="text-green-500">The date ${dateInput} is available.</p>`;
    }
});
