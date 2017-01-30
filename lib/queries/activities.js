import { GraphQLList, } from 'graphql'

import Activity from '../models/Activity'
import moment from 'moment'
import fetch from '../utils/fetch'

export default {
  type: new GraphQLList(Activity),
  description: 'List all activities',

  resolve: (root) => {
    const start = moment().format('YYYY-MM-DD')
    const end = moment().add(5, 'days').format('YYYY-MM-DD')

    const options = {
      startdate: start,
      enddate: end
    }

    return fetch('activities.json', options)
      .then(({ activities }) => activities.activity)
  }
}