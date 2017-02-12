import {
  graphql,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql'

import { Item } from '../types'

export default new GraphQLObjectType({
  name: 'Receipt',
  fields: {
    amount: { type: GraphQLInt },
    created: { type: GraphQLString },
    id: { type: GraphQLInt },
    items: { type: new GraphQLList(Item) }
  }
})
