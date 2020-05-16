exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { title: 'Meu projeto', user_id: 2 },
        { title: 'Site de doações', user_id: 2 },
      ]);
    });
};
