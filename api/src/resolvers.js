/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    // first arg is parent value. But since we're calling the query first, there is nothing resolving before.
    // second arg is arguments. It allows clients to pass variables along with queries so that the resolver can use them.
    // third - context. It's a shared context amongst all the resolvers
    companies(_, {input}, ctx) {
      return ctx.models.Company.findMany(input)
    },
    users(_, {input}, ctx) {
      return ctx.models.User.findMany(input)
    },
    user(_, {input}, ctx) {
      return ctx.models.User.findOne(input)
    },
    company(_, {input}, ctx) {
      return ctx.models.Company.findOne(input)
    }
  },
  Mutation: {
    addUser(_, {input}, ctx) {
      return ctx.models.User.create(input);
    },
    addCompany(_, {input}, ctx) {
      return ctx.models.Company.create(input);
    }
  }
}
