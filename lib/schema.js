import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import activities from './queries/activities'
import invoices from './queries/invoices'
import messages from './queries/messages'
import products from './queries/products'
import receipts from './queries/receipts'
import workouts from './queries/workouts'

const Query = new GraphQLObjectType({
  name: 'CFNAPI',
  fields: {
    activities,
    invoices,
    messages,
    products,
    receipts,
    workouts
  }
})

export default new GraphQLSchema({
  query: Query
})