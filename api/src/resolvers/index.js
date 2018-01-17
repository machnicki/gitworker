const resolvers = {
  Query: {
    PR(root) {
      return { title: 'My title', user: 'Michael Jackson' };
    }
  }
};

module.exports = resolvers;
