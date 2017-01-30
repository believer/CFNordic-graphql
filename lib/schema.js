import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import activities from './queries/activities'
import receipts from './queries/receipts'

const Query = new GraphQLObjectType({
  name: 'CFNAPI',
  fields: {
    activities,
    receipts
  }
})

export default new GraphQLSchema({
  query: Query
})