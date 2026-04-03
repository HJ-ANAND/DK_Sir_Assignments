// const http = require("http");

// const PORT = 3000;

// // Step 3: Server create karo
// const server = http.createServer(function (req, res) {
//   // Yeh function har request pe chalega
//   // req = browser se aayi request
//   // res = hum kya jawab denge

//   // Response ka header set karo
//   res.writeHead(200, { "Content-Type": "text/plain" });

//   // Response bhejo
//   res.end("Welcome to HJ Server ;)");
// });

// // Step 4: Server ko PORT pe sunao
// server.listen(PORT, function () {
//   console.log("Server chal raha hai: http://localhost:" + PORT);
// });

const http = require("http");
const PORT = 3000;

const server = http.createServer(function (req, res) {
  if (req.url === "/api/user") {
    // JSON data ready karo
    const user = {
      name: "Rahul",
      age: 22,
      city: "Mumbai",
    };

    // Content-Type ab JSON hai
    res.writeHead(200, { "Content-Type": "application/json" });

    // JSON.stringify() — Object ko string mein convert karta hai
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route nahi mila");
  }
});

server.listen(PORT, function () {
  console.log("Server chal raha hai: http://localhost:" + PORT);
});
