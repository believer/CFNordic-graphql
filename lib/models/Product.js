import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: GraphQLString },
    descriptiontranslations: { type: new GraphQLList(GraphQLString) },
    nametranslations: { type: new GraphQLList(GraphQLString) },
    name: { type: GraphQLString },
    nametranslations: { type: GraphQLString },
    number: { type: GraphQLString },
    lastupdate: { type: GraphQLString },
    bookablefrominternet: { type: GraphQLString },
    cssclass: { type: GraphQLString }

    // TODO: Fill rest of fields
  }
})