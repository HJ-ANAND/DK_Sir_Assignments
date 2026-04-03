function runUsernameGenerator() {
  let fullName = prompt("Enter your full name:");

  let lowerCaseName = fullName.toLowerCase();

  let nameParts = lowerCaseName.split(" ");

  const generateUsername = (parts) => {
    return parts.join("_");
  };

  function displayUsername(username, callback) {
    callback(username);
  }

  function show(username) {
    alert("Generated Username: " + username);
  }

  let username = generateUsername(nameParts);

  displayUsername(username, show);
}
