import request from 'superagent'
import { Pokemon, SearchResult } from '../../models/pokemon'
import { Leaderboard } from '../../models/leaderInterface'

export async function getAllPokemon() {
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  return res.body as SearchResult
}

export async function getSpecificPokemon(name: string) {
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return res.body as Pokemon
}

export async function getLeaderboard() {
  const res = await request.get(`/api/v1/leaders/leaderboardFull`)
  return res.body as Leaderboard
}

export async function getBoard() {
  const res = await request.get(`/api/v1/leaders/leaderboard`)
  return res.body as Leaderboard
}

// https://pokeapi.co/api/v2/pokemon?limit=151

// (`https://pokeapi.co/api/v2/pokemon?limit=1025`)
