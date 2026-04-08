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

app.put('/:id', (req,res) => {
  const id = parseInt(req.params.id);
  const idx = friends.findIndex(obj => obj.id === id);

  if(idx === -1){
    return res.status(404).json("Friend doesn't exist");
  }

  req.body.id = id;
  friends[idx] = req.body;

  res.json(friends);
});

app.patch('/:id', (req,res) => {
  const id = parseInt(req.params.id)
  const idx = friends.findIndex(obj => obj.id === id);

  if(idx === -1) return res.json("Friend not found.");

  friends[idx] = {...friends[idx], ...req.body}

  res.json(friends);
});

app.delete('/:id', (req,res) =>{
  const id = parseInt(req.params.id)
  const idx = friends.findIndex(obj => obj.id === id);

  if(idx === -1) return res.json("Friend not found.");

  const deletedData = friends.splice(idx, 1);

  res.json({
    message: "Friend Deleted.",
    deleted_Data:deletedData,
    new_Data: friends
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
