import { GraphQLList, } from 'graphql'

import Receipt from '../models/Receipt'
import fetch from '../utils/fetch'

export default {
  type: new GraphQLList(Receipt),
  description: 'List all receipts',

  resolve: (root) => {
    return fetch('receipts.json')
      .then(({ receipts }) => receipts)
  }
}