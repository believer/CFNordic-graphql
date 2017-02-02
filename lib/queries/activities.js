import { GraphQLList, } from 'graphql'

import Activity from '../models/Activity'
import moment from 'moment'
import fetch from '../utils/fetch'

export default {
  type: new GraphQLList(Activity),
  description: 'List all activities',

  resolve: (root) => {
    const options = {
      startdate: moment().format('YYYY-MM-DD'),
      enddate: moment().add(5, 'days').format('YYYY-MM-DD')
    }

    return fetch('activities.json', options)
      .then(({ activities }) => activities.activity)
  }
}