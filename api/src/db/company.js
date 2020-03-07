const nanoid = require('nanoid')

const createCompanyModel = db => {
  return {
    findMany(filter) {
      return db.get('companies')
        .filter(filter)
        .value()
    },

    findOne(filter) {
      return db.get('companies')
        .find(filter)
        .value()
    },

    create(company) {
      const newCompany = {id: nanoid(), createdAt: Date.now(), ...company}
      
      db.get('companies')
        .push(newCompany)
        .write()

      return newCompany
    }
  }
}

module.exports = createCompanyModel
