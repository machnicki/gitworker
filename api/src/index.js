const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

const typesArray = fileLoader(path.join(__dirname, './types'));
const typeDefs = mergeTypes(typesArray);
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers });
const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
