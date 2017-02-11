import {
  graphql,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString
} from 'graphql'

import { Time, Participant, Resource, WorkoutProduct } from '../types'

export default new GraphQLObjectType({
  name: 'Activity',
  fields: {
    start: { type: Time },
    end: { type: Time },
    id: { type: GraphQLInt },
    freeslots: { type: GraphQLInt },
    bookingid: { type: GraphQLInt },
    bookableslots: { type: GraphQLInt },
    totalslots: { type: GraphQLInt },
    cancelled: { type: GraphQLBoolean },
    resources: { type: new GraphQLList(Resource) },
    participants: { type: new GraphQLList(Participant) },
    product: { type: WorkoutProduct }
  }
})
