import {
  graphql,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString
} from 'graphql'

const Participant = new GraphQLObjectType({
  name: 'Participant',
  fields: {
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString }
  }
})

const Resource = new GraphQLObjectType({
  name: 'Resource',
  fields: {
    name: { type: GraphQLString }
  }
})

const Time = new GraphQLObjectType({
  name: 'Time',
  fields: {
    timepoint: {
      type: new GraphQLObjectType({
        name: 'Timepoint',
        fields: {
          timestamp: { type: GraphQLInt },
          date: { type: GraphQLString },
          time: { type: GraphQLString }
        }
      })
    }
  }
})

const Product = new GraphQLObjectType({
  name: 'Product',
  fields: {
    name: { type: GraphQLString },
    id: { type: GraphQLInt }
  }
})

export default new GraphQLObjectType({
  name: 'Activity',
  fields: {
    start: { type: Time },
    end: { type: Time },
    freeslots: { type: GraphQLInt },
    bookableslots: { type: GraphQLInt },
    totalslots: { type: GraphQLInt },
    cancelled: { type: GraphQLBoolean },
    resources: { type: new GraphQLList(Resource) },
    participants: { type: new GraphQLList(Participant) },
    product: { type: Product }
  }
})