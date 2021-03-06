const typeDefinitions = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
type Query {
  author(firstName: String, lastName: String): Author
  getFortuneCookie: String
  authors: [Author] // 'authors' query should return an array of Author
}
schema {
  query: Query
}
`;

export default [typeDefinitions];
