function runShoppingCart() {

    let cart = [];

    cart.push("Laptop");
    cart.push("Mouse");
    cart.push("Keyboard");

    cart.unshift("USB Drive");

    cart.shift();

    let index = cart.indexOf("Mouse");
    if (index !== -1) {
        cart.splice(index, 1);
    }

    console.log("Final Shopping Cart:");
    cart.forEach(function(item, index) {
        console.log((index + 1) + ". " + item);
    });

    alert("Final Cart: " + cart.join(", "));
}