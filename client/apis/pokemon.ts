import request from 'superagent'
import { Pokemon, SearchResult } from '../../models/pokemon'

export async function getAllPokemon() {
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon?limit=1025`)
  return res.body as SearchResult
}

export async function getSpecificPokemon(URL) {
  const res = await request.get(`${URL}`)
  return res.body as Pokemon
}

// https://pokeapi.co/api/v2/pokemon?limit=151
