import { GraphQLList, } from 'graphql'

import Invoice from '../models/Invoice'
import fetch from '../utils/fetch'

export default {
  type: new GraphQLList(Invoice),
  description: 'List all invoices',

  resolve: (root) => {
    return fetch('invoices.json')
      .then(({ invoices }) => invoices)
  }
}