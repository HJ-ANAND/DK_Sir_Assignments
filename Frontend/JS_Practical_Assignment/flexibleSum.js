function runFlexibleSum() {

    const sumNumbers = (...numbers) => {
        return numbers.reduce((total, num) => total + num, 0);
    };

    let result = sumNumbers(10, 20, 30, 40, 50);

    alert("Numbers: 10, 20, 30, 40, 50\nSum: " + result);

    console.log("Sum:", result);
}