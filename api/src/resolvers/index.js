const PR = require('../models/pr');

const resolvers = {
  Query: {
    PRs() {
      return PR.get();
    },
    PR(_, { id }) {
      return PR.get(id);
    },
  },
  Mutation: {
    createPR(_, data) {
      return PR.create(data);
    },
  },
};

module.exports = resolvers;
