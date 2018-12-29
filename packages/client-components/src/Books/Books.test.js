import React from 'react';
import Books from './Books';

import renderer from 'react-test-renderer'
import { MockedProvider } from 'react-apollo/test-utils';

import GET_BOOK_TITLES from './graphql/queries/booktitles';

import wait from 'waait';

const mocks = [
  {
    request: {
      query: GET_BOOK_TITLES
    },
    result: {
      data: {
        books: [
          {
            title: 'Harry Potter and the Chamber of Secrets',
            author: 'J.K. Rowling',
          },
          {
            title: 'Jurassic Park',
            author: 'Michael Crichton',
          }
        ]
      },
    },
  },
];

it('Renders one book', async () => {

  const component = renderer.create(<MockedProvider mocks={mocks} addTypename={false}>
    <Books />
  </MockedProvider>);
  expect(component.toJSON()).toEqual('Loading...');

  // to wait for event loop to complete - after which component should be loaded
  await wait(0);

  const pre = component.root.findByType('pre');
  expect(pre.children).toContain('Harry Potter and the Chamber of Secrets');

});
