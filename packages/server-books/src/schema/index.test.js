// see https://hackernoon.com/extensive-graphql-testing-57e8760f1c25
import {
    makeExecutableSchema,
    addMockFunctionsToSchema,
    mockServer
} from 'graphql-tools';

import { graphql } from 'graphql';

import booksSchema from './index';

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
    expected: { data: { books: [{ title: 'Title'} , { title: 'Title' }] } }
};

const cases = [titleTestCase];

describe('Schema', () => {
    const typeDefs = booksSchema;
    const mockSchema = makeExecutableSchema({ typeDefs });

    addMockFunctionsToSchema({
        schema: mockSchema,
        mocks: {
            Boolean: () => false,
            ID: () => '1',
            Int: () => 1,
            Float: () => 1.1,
            String: () => 'Title',
        }
    });

    test('Has valid type definitions', async () => {
        expect(async () => {
            const MockServer = mockServer(typeDefs);

            await MockServer.query(`{ __schema { types { name } } }`);
        }).not.toThrow();
    });

    cases.forEach(obj => {
        const { id, query, variables, context: ctx, expected } = obj;

        test(`Testing Query: ${id}`, async () => {
            return await expect(
                graphql(mockSchema, query, null, { ctx }, variables)
            ).resolves.toEqual(expected);
        });
    });

});