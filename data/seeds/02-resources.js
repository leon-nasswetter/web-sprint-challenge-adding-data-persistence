exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Youtube', resource_description: "videos resource"},
        {resource_name: 'W3Schools', resource_description: "text resource"},
        {resource_name: 'Slack Channel', resource_description: "community resource"}
      ]);
    });
};