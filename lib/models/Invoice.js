import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql'

import { Company, State, VatSums } from '../types'

export default new GraphQLObjectType({
  name: 'Invoice',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    number: { type: GraphQLInt },
    orderid: { type: GraphQLInt },
    ocrnumber: { type: GraphQLString },
    prefix: { type: GraphQLString },
    orderedby: { type: GraphQLString },
    orderedbycustomerid: { type: GraphQLInt },
    totalamount: { type: GraphQLInt },
    rest: { type: GraphQLInt },
    invoicedate: { type: GraphQLString },
    duedate: { type: GraphQLString },
    state: { type: State },
    reminderamount: { type: GraphQLString },
    organization: { type: GraphQLString },
    customer: { type: GraphQLString },
    company: { type: Company },
    vatsums: { type: new GraphQLList(VatSums) },
  }
})