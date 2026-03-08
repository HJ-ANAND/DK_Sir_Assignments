function runEmailExtractor() {

    let email = prompt("Enter your email address:");

    let atPosition = email.indexOf("@");

    let domain = email.slice(atPosition + 1);

    let updatedEmail = email.replace("gmail", "company");

    alert(
        "Original Email: " + email +
        "\nPosition of @: " + atPosition +
        "\nEmail Domain: " + domain +
        "\nUpdated Email: " + updatedEmail
    );

    console.log("Original Email:", email);
    console.log("Position of @:", atPosition);
    console.log("Domain:", domain);
    console.log("Updated Email:", updatedEmail);
}