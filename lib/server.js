import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import cors from 'cors'

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(4000, () => console.log('Listening on 4000'))
