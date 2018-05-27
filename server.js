const express = require('express');
const app = express();

app.use(express.static(__dirname + '/pages'));
app.set("view engine", "ejs");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

let article = [
  {
    title: "hello world",
    productsID: 2,
    author: "panjamapon karnasuta"
  },
  {
    title: "android",
    productsID: 3,
    author: "panjamapon karnasuta"
  },
  {
    title: "firebase",
    productsID: 4,
    author: "panjamapon karnasuta"
  }
];

app.post("/api/article", (req, res) => {
  article.push({
    title: "hello Kotlin",
    productsID: 1,
    author: "panjamapon karnasuta"
  });
  res.send(article);
});

app.get("/api/article", (req, res) => {
  res.json(article);
});

app.listen(3000, () => {
  console.log("server running at localhost:3000");
});