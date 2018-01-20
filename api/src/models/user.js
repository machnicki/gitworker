const methods = {}

const User = function({
  id,
  name,
  email,
  avatar,
}){
  return {
    id,
    name,
    email,
    avatar,
    __proto__: methods,
  }
}

const DB = [{
  id: 1,
  name: 'Michael Jordan',
  email: 'jordan@gmail.com',
  avatar: undefined,
}]

User.get = (id = null) => {
  if (id) {
    const item = DB.find(({ id: _id }) => id === _id)
    return item ? User(item) : null
  }
  return DB.map(User)
}

module.exports = User
