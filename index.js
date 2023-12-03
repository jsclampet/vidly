const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const genres = [
  { name: "horror", id: 1 },
  { name: "comedy", id: 2 },
  { name: "romance", id: 3 },
  { name: "drama", id: 4 },
];

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.get("/api/genres/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("genre not found");

  res.send(genre);
});

app.post("/api/genres", (req, res) => {
  const genre = {
    name: req.body.name,
    id: genres.length + 1,
  };

  genres.push(genre);
  res.send(genre);
});

app.put("/api/genres/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  genre.name = req.body.name;
  res.send(genre);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
