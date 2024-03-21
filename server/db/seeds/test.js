/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()
  await knex('leaderboard').insert([
    { id: 1, name: 'john', score: 6, lives: 4 },
    { id: 2, name: 'tim', score: 4, lives: 1 },
    { id: 3, name: 'olivia', score: 7, lives: 0 },
    { id: 4, name: 'patrick', score: 3, lives: 3 },
    { id: 5, name: 'anna', score: 5, lives: 5 },
  ])
}
