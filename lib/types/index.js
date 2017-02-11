import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql'

export const Company = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString }
  }
})

export const Item = new GraphQLObjectType({
  name: 'Item',
  fields: {
    id: { type: GraphQLInt },
    productname: { type: GraphQLString },
    priceincvat: { type: GraphQLInt }
  }
})

export const Participant = new GraphQLObjectType({
  name: 'Participant',
  fields: {
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    id: { type: GraphQLInt }
  }
})

export const Person = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  }
})

export const Resource = new GraphQLObjectType({
  name: 'Resource',
  fields: {
    name: { type: GraphQLString },
    type: { type: GraphQLString }
  }
})

export const State = new GraphQLObjectType({
  name: 'State',
  fields: {
    number: { type: GraphQLInt },
    value: { type: GraphQLString }
  }
})

export const Timepoint = new GraphQLObjectType({
  name: 'Timepoint',
  fields: {
    timestamp: { type: GraphQLInt },
    datetime: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString }
  }
})

export const Time = new GraphQLObjectType({
  name: 'Time',
  fields: {
    timepoint: { type: Timepoint }
  }
})

export const VatSums = new GraphQLObjectType({
  name: 'VatSums',
  fields: {
    rate: { type: GraphQLString },
    amount: { type: GraphQLInt }
  }
})

export const WorkoutProduct = new GraphQLObjectType({
  name: 'WorkoutProduct',
  fields: {
    name: { type: GraphQLString },
    id: { type: GraphQLInt }
  }
})
