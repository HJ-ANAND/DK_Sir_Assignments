// new array of friend, with id, name and city, make get and post for this

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let friends = [
  {
    id: 1,
    name: "friend1",
    city: "city1",
  },
  {
    id: 2,
    name: "friend2",
    city: "city2",
  },
  {
    id: 3,
    name: "friend3",
    city: "city3",
  },
];

let friend_id = 5;

app.get("/", (req, res) => {
  res.json(friends);
});

app.get("/:id", (req, res) => {
  const dataId = parseInt(req.params.id);

  const result = friends.find((d) => d.id === dataId);

  if (!result) return res.json("404 Not found.");

  res.json(result);
});

app.post("/", (req, res) => {
  const friend = req.body;

   const new_friend = {
      id: friend_id++,
      name: friend.name,
      city: friend.city,
    }

  friends.push(new_friend);

  res.json({
    status: "Success 201",
    message: "Data added successfully",
    friends,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
