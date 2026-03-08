function runObjectSeal() {

    let user = {
        name: "Anand",
        age: 20,
        city: "Noida"
    };

    Object.seal(user);

    user.email = "anand@email.com";

    user.age = 21;

    delete user.city;

    alert(
        "User Object After Seal:\n" +
        "Name: " + user.name +
        "\nAge: " + user.age +
        "\nCity: " + user.city +
        "\nEmail (new property): " + user.email
    );

    console.log("Final User Object:", user);
}