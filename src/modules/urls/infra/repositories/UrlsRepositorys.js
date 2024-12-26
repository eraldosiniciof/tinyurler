import { knex } from '../../../../infra/knex/conection'

const REPOSITORY = 'urls'

class UrlsRepository {
  async create(params) {
    console.log(params)
    const result = await knex(REPOSITORY).insert(params).returning('*')
    return result
  }
}

export { UrlsRepository }
