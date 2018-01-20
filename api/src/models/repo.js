const User = require('./user');

const methods = {};

const Repo = ({
  id,
  title,
  url,
  author,
}) => ({
  id,
  title,
  url,
  author: User.get(author),
  __proto__: methods,
});

const DB = [{
  id: 1,
  title: 'Mu first repo',
  url: 'http://google.com',
  author: 1,
}];

Repo.get = (id = null) => {
  if (id) {
    const item = DB.find(({ id: _id }) => id === _id);
    return item ? Repo(item) : null;
  }
  return DB.map(Repo);
};

module.exports = Repo;
