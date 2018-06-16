const graphql = require('graphql');

const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} = graphql;

// data
consumerDetail = () => ({
    id: '32424xxx',
    name: 'happyudong',
    category: 'nintendo switch'
});

// schema of data
const productsType = new GraphQLObjectType({
    name:'products',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        category: {type: GraphQLString}
    })
});

// query data
const productsQuery = new GraphQLObjectType({
    name:'productsQuery',
    fields: () => ({
        products: {
            type: productsType,
            resolve: () => {
                return consumerDetail()
            }
        }
    })
});

// export & return schema
const schema = new GraphQLSchema({
   query: productsQuery
});
module.exports = schema;