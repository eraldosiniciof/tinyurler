import { knex } from '@knex/conection'

const REPOSITORY = 'urls'

class UrlsRepository {
  async create(params) {
    const result = await knex(REPOSITORY).insert(params).returning('*')
    return result
  }

  async findByShort(short) {
    const result = await knex(REPOSITORY)
      .where('short', short)
      .orderBy('expires_at', 'desc')
      .limit(1)

    return result
  }
}

export { UrlsRepository }
