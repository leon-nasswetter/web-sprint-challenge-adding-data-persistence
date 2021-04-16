exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'HTML Project', project_description: "Testing HTML skills"},
        {project_name: 'CSS Project', project_description: "Testing CSS skills"},
        {project_name: 'JS Project', project_description: "Testing JS skills"}
      ]);
    });
};