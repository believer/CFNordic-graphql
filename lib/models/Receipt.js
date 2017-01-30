import {
  graphql,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql'

const Item = new GraphQLObjectType({
  name: 'Item',
  fields: {
    id: { type: GraphQLInt },
    productname: { type: GraphQLString },
    priceincvat: { type: GraphQLInt }
  }
})

export default new GraphQLObjectType({
  name: 'Receipt',
  fields: {
    items: { type: new GraphQLList(Item) }
  }
})