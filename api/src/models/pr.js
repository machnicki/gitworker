const User = require('./user');
const Repo = require('./repo');

const methods = {};

const PR = ({
  id,
  title,
  date,
  author,
  repo,
  branchOut,
  branchIn,
  state,
}) => ({
  id,
  title,
  date,
  author: User.get(author),
  repo: Repo.get(repo),
  branchOut,
  branchIn,
  state,
  __proto__: methods,
});

const DB = [{
  id: 1,
  title: 'My first PR',
  date: 1516472762,
  author: 1,
  repo: 1,
  branchOut: 'feature/123',
  branchIn: 'master',
  state: 'open',
}];

PR.get = (id = null) => {
  if (id) {
    const item = DB.find(({ id: _id }) => parseInt(id, 10) === _id);
    return item ? PR(item) : null;
  }
  return DB.map(PR);
};

module.exports = PR;
