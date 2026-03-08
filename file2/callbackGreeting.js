function runCallbackGreeting() {

    let name = prompt("Enter your name:");

    const createGreeting = (name) => {
        return "Hello " + name + "! Welcome to the system.";
    };

    function showGreeting(message) {
        alert(message);
    }

    let greeting = createGreeting(name);

    showGreeting(greeting);
}