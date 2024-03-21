import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllPokemon, getSpecificPokemon } from '../apis/pokemon'

export function generateRandomPokemonNumber() {
  return Math.floor(Math.random() * 898) + 1
}

