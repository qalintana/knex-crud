const knex = require('../database');

module.exports = {
  async index(req, res, next) {
    try {
      const { user_id, page = 1 } = req.query;

      const query = knex('projects')
        .limit(5)
        .offset((page - 1) * 5);
      const countObject = knex('projects').count();

      if (user_id) {
        query
          .where({ user_id })
          .join('users', 'users.id', '=', 'projects.id')
          .select('projects.*', 'users.username');

        countObject.where({ user_id });
      }

      const [count] = await countObject;
      console.log(others);

      res.header('Total', count.count);
      const projets = await query;
      return res.json(projets);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { title, user_id } = req.body;
      const project = await knex('projects').insert({ title, user_id });
      return res.status(201).json(project);
    } catch (error) {
      next(error);
    }
  },
};
