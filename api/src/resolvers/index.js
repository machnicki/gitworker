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
};

module.exports = resolvers;
