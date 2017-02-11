import { GraphQLList, GraphQLNonNull, GraphQLInt } from 'graphql'

import Activity from '../models/Activity'
import fetch from '../utils/fetch'

export default {
  type: Activity,
  description: 'Get specific activity',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },

  resolve: (root, { id }) => {
    const options = {
      id: id
    }

    return fetch('activities.json', options)
      .then(({ activity }) => activity)
  }
}
