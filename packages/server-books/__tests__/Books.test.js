// see https://medium.com/@nzaghini/properly-test-a-graphql-server-d178241464e7

import { makeExecutableSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import resolvers from '../src/resolvers'
import typeDefs from '../src/schema'

const titleTestCase = {
    id: 'Query Title',
    query: `
      query {
        books {
            title
        }
      }
    `,
    variables: {},
    context: {},
    expected: { data: { books: [{ title: 'Harry Potter and the Chamber of Secrets' }, { title: 'Jurassic Park' }] } }
};

describe('Test Cases', () => {

    const cases = [titleTestCase]
    const schema = makeExecutableSchema({ typeDefs: typeDefs, resolvers: { Query: resolvers } })

    cases.forEach(obj => {
        const { id, query, variables, context, expected } = obj

        test(`query: ${id}`, async () => {
            const result = await graphql(schema, query, null, context, variables)
            return expect(result).toEqual(expected)
        })
    })
})