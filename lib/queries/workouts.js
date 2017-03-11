import { GraphQLList, GraphQLString } from 'graphql'

import Workout from '../models/Workout'
import moment from 'moment'
import fetch from '../utils/fetch'

export default {
  type: new GraphQLList(Workout),
  description: 'List all workouts this year',
  args: {
    startdate: {
      type: GraphQLString
    },
    enddate: {
      type: GraphQLString
    }
  },

  resolve: (root, { startdate, enddate }) => {
    const options = {
      enddate: enddate || moment().add(1, 'year').format('YYYY-MM-DD'),
      startdate: startdate || '2000-01-01'
    }

    return fetch('workouts.json', options)
      .then(({ workouts }) => workouts)
  }
}
