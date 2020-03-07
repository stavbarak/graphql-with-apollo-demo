const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('api/src/db/db.json')
const db = low(adapter)

const createUserModel = require('./user')
const createCompanyModel = require('./company')

module.exports = {
  models: {
    Company: createCompanyModel(db),
    User: createUserModel(db),
  },
  db
}