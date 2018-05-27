const express = require('express')
const app = express();
const next = require('next')
const dev = process.env.NODE_ENV !== 'production';
const nextRoute = next({ dev });
const handle = nextRoute.getRequestHandler();
const https = require('https');
const http = require('http');

let article = require('./static/db.json');
app.use(express.static(__dirname + '/pages'));
app.set("view engine", "ejs");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
});

nextRoute.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  });
server.get("/", (req, res) => {
  res.render("index");
});

server.post("/api/article", (req, res) => {
  article.push({
    bookName: "hello Kotlin",
    productsID: 1,
    author: "panjamapon karnasuta"
  });
  res.send(article);
});

server.get("/api/article", (req, res) => {
  res.json(article);
});
server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  });
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});