function runObjectFreeze() {

    let product = {
        name: "Laptop",
        price: 60000,
        brand: "Dell"
    };

    Object.freeze(product);

    product.price = 50000;

    let message;

    if (product.price === 60000) {
        message = "Modification did NOT work. Object is frozen.";
    } else {
        message = "Modification worked.";
    }

    alert(
        "Product Name: " + product.name +
        "\nPrice: " + product.price +
        "\nBrand: " + product.brand +
        "\n\nResult: " + message
    );

    console.log("Product Object:", product);
}