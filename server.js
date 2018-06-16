<<<<<<< HEAD
// yarn packages
const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const cors = require('cors');

// our packages
const expressGraphQL = require('express-graphql');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const graphQL_PORT = process.env.port || 3000;
const schema = require('./static/graphql_schema/schema');

app.prepare().then(() => {
  const graphQLServer = express();
  graphQLServer.use(cors());
  graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
  graphQLServer.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

  graphQLServer.get('*', (req, res) => {
    return handle(req ,res)
  });

  graphQLServer.listen(graphQL_PORT, () => {
    console.log(`server is running at http://localhost:${graphQL_PORT}`)
  });
})
=======
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
>>>>>>> 62dfe06d56ea4298560cf0edc2cb538ff46cd71b
