import {
  graphql,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString
} from 'graphql'

import { Timepoint, Person } from '../types'

export default new GraphQLObjectType({
  name: 'Workout',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    timepoint: { type: Timepoint },
    person: { type: Person },
    activityid: { type: GraphQLInt }
  }
})