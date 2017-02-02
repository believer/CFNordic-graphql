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
    items: { type: new GraphQLList(Item) }
  }
})