function runOptionalChaining() {

    let company = {
        department: {
            manager: {
                name: "Anand"
            }
        }
    };

    let managerName = company?.department?.manager?.name;

    let managerAge = company?.department?.manager?.age;

    alert(
        "Manager Name: " + managerName +
        "\nManager Age (missing property): " + managerAge
    );

    console.log("Manager Name:", managerName);
    console.log("Manager Age:", managerAge);
}