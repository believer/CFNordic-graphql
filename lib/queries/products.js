import { GraphQLList, } from 'graphql'

import Product from '../models/Product'
import fetch from '../utils/fetch'

export default {
  type: new GraphQLList(Product),
  description: 'List all products',

  resolve: (root) => {
    return fetch('products.json')
      .then(({ products }) => products)
  }
}