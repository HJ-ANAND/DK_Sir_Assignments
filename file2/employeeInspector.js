function runEmployeeInspector() {

    let employee = {
        name: "Anand",
        id: 101,
        department: "IT",
        salary: 50000
    };

    let keys = Object.keys(employee);
    let values = Object.values(employee);
    let entries = Object.entries(employee);

    alert(
        "Employee Keys: " + keys.join(", ") +
        "\nEmployee Values: " + values.join(", ")
    );

    console.log("Keys:", keys);
    console.log("Values:", values);
    console.log("Entries:", entries);
}