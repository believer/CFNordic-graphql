import { GraphQLList, } from 'graphql'

import Receipt from '../models/Receipt'
import fetch from '../utils/fetch'

export default {
  type: new GraphQLList(Receipt),
  description: 'List all receipts',

  resolve: (root) =>
    fetch('receipts.json')
      .then(({ receipts }) => receipts.filter(receipt => receipt.items.length))
      .then(receipts => receipts.sort((a, b) => b.id - a.id))
}
