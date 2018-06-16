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