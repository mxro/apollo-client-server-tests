import resolvers from './';

const books = resolvers.books;

it('Provides book data', () => {
    expect(books({}, {}, {})).toContainEqual({
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    });
})