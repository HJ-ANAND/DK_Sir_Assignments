function runOrderCalculator() {

    let orders = [250, 400, 150, 600];

    let ordersWithTax = orders.map(order => order * 1.10);

    let totalBill = ordersWithTax.reduce((total, order) => total + order, 0);

    alert(
        "Original Orders: " + orders.join(", ") +
        "\nOrders with 10% Tax: " + ordersWithTax.map(o => o.toFixed(2)).join(", ") +
        "\nTotal Bill: ₹" + totalBill.toFixed(2)
    );

    console.log("Original Orders:", orders);
    console.log("Orders with Tax:", ordersWithTax);
    console.log("Total Bill:", totalBill);
}