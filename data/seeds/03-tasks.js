exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'Put thinking socks on', task_notes: "this is considered important", project_id:1},
        {task_description: 'Put struggle hat on', task_notes: "this is considered important", project_id:2},
        {task_description: 'Have energy potions ready', task_notes: "this is considered important", project_id:3}
      ]);
    });
};