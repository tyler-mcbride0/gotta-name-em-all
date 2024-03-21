/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()
  await knex('leaderboard').insert([
    { id: 1, name: 'john', score: 6 },
    { id: 2, name: 'tim', score: 4 },
    { id: 3, name: 'olivia', score: 7 },
    { id: 4, name: 'patrick', score: 3 },
    { id: 5, name: 'anna', score: 5 },
  ])
}
