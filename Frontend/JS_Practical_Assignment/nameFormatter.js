function runNameFormatter() {

    let names = ["  anand", " rohit  ", "  priya  ", "rahul "];

    let formattedNames = names.map(function(name) {

        let trimmed = name.trim();

        let properCase = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();

        return properCase;
    });

    alert(
        "Original Names:\n" + names.join(", ") +
        "\n\nFormatted Names:\n" + formattedNames.join(", ")
    );

    console.log("Original Names:", names);
    console.log("Formatted Names:", formattedNames);
}