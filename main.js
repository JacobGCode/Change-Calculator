function calculateChange() {
    var amountDue = Number(
        document.getElementById('amount-due').value
    );

    var amountReceived = Number(
        document.getElementById('amount-received').value
    );

    // Now we convert the change to whole cents to avoid any decimal rounding issues.
    var change = Math.round(amountReceived * 100)
            -Math.round(amountDue * 100);

    if (change < 0) {
        alert('The customer has not given enough money.');
        return;
    }

    var dollars = Math.floor(change / 100);
    change = change % 100;

    var quarters = Math.floor(change / 25);
    change = change % 25;

    var dimes = Math.floor(change / 10);
    change = change % 10;

    var nickels = Math.floor(change / 5);
    var pennies = change % 5;

    document.getElementById('dollars-output').textContent = dollars;
    document.getElementById('quarters-output').textContent = quarters;
    document.getElementById('dimes-output').textContent = dimes;
    document.getElementById('nickels-output').textContent = nickels;
    document.getElementById('pennies-output').textContent = pennies;
}

document.getElementById('calculate-change').onclick = calculateChange;