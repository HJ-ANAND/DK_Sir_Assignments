function runArrayMerger() {

    let arr1 = [5, 12, 3, 9];
    let arr2 = [8, 1, 20, 6];

    let mergedArray = [...arr1, ...arr2];

    mergedArray.sort((a, b) => a - b);

    let finalArray = mergedArray.slice(2);

    // Display results
    alert(
        "Array 1: " + arr1.join(", ") +
        "\nArray 2: " + arr2.join(", ") +
        "\nMerged Array: " + mergedArray.join(", ") +
        "\nAfter Removing First Two Numbers: " + finalArray.join(", ")
    );

    console.log("Array 1:", arr1);
    console.log("Array 2:", arr2);
    console.log("Merged Array:", mergedArray);
    console.log("Final Array:", finalArray);
}