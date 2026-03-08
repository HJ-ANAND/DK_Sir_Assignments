function runCategoryFlattener() {

    // Nested array of categories
    let categories = ["Electronics", ["Laptop", "Mobile"], ["TV", ["LED", "OLED"]]];

    // Flatten the array using flat()
    let flatCategories = categories.flat(2);

    // Sort items alphabetically
    flatCategories.sort();

    // Display results using forEach()
    console.log("Flattened and Sorted Categories:");

    flatCategories.forEach(function(item, index) {
        console.log((index + 1) + ". " + item);
    });

    alert("Categories: " + flatCategories.join(", "));
}