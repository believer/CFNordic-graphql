import {
  graphql,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Message',
  fields: {
    body: { type: GraphQLString },
    title: { type: GraphQLString }
  }
})