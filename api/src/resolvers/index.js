const PR = require('../models/pr')

const resolvers = {
  Query: {
    PR(root) {
      return PR.get(1)
    }
  }
}

module.exports = resolvers
