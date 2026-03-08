function runProfileFormatter(){
    let fullName = prompt("Enter your full name:");
    
    let trimmedName = fullName.trim();
    
    let upperCaseName = trimmedName.toUpperCase();
    
    let firstCharacter = trimmedName.charAt(0);
    
    let userProfile = {
      originalName: trimmedName,
      upperCaseName: upperCaseName,
      firstCharacter: firstCharacter,
    };
    
    alert(
      "Original Name: " +
        userProfile.originalName +
        "\nUppercase Name: " +
        userProfile.upperCaseName +
        "\nFirst Character: " +
        userProfile.firstCharacter,
    );
    
    console.log("Object Keys:", Object.keys(userProfile));
    console.log("Object Values:", Object.values(userProfile));
}
