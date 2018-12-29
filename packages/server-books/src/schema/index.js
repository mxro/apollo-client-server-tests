const typeDefs = `

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

`;

export default typeDefs