function runProductDiscount() {
  let prices = [120, 80, 1500, 450, 60, 2000];

  let discountedPrices = prices.map(function (price) {
    return price * 0.9;
  });

  console.log("Original Prices:", prices);
  console.log("Prices after 10% Discount:", discountedPrices);

  let expensiveProduct = prices.find(function (price) {
    return price > 1000;
  });

  console.log("First product above ₹1000:", expensiveProduct);

  let below100 = prices.some(function (price) {
    return price < 100;
  });

  console.log("Is any product below ₹100?", below100);

  let above50 = prices.every(function (price) {
    return price > 50;
  });

  console.log("Do all products cost above ₹50?", above50);

  // Show result in alert
  alert(
    "Discounted Prices: " +
      discountedPrices +
      "\nFirst Product > ₹1000: " +
      expensiveProduct +
      "\nAny Product < ₹100: " +
      below100 +
      "\nAll Products > ₹50: " +
      above50,
  );
}
