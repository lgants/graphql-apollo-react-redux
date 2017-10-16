import { Author, FortuneCookie } from './connectors';

const resolvers = {
  Query: {
    author(_, args) {
      return Author.find({ where: args });
    },
    authors() { // the query "authors" means returning all authors!
      return Author.findAll({})
    }
    getFortuneCookie() {
      return FortuneCookie.getOne()
    }
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
  },
};

export default resolvers;
