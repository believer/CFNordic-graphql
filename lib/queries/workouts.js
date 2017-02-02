import { GraphQLList, } from 'graphql'

import Workout from '../models/Workout'
import moment from 'moment'
import fetch from '../utils/fetch'

export default {
  type: new GraphQLList(Workout),
  description: 'List all workouts this year',

  resolve: (root) => {
    const options = {
      enddate: moment().add(1, 'year').format('YYYY-MM-DD')
    }

    return fetch('workouts.json', options)
      .then(({ workouts }) => workouts)
  }
}