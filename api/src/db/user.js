const nanoid = require('nanoid')

const createUserModel = db => {
  return {
    findOne(filter) {
      return db.get('users')
        .find(filter)
        .value()
    },
    findMany(filter) {
      return db.get('users')
        .filter(filter)
        .value()
    },

    create(user) {
      const newUser = {id: nanoid(), createdAt: Date.now(), ...user}
      db.get('users')
        .push(newUser)
        .write()
  
      return newUser
    }
  }
}

module.exports = createUserModel
