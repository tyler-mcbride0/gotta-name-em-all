import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'

import { getPokemonById } from '../apis/pokemon'

// export function getPokemon() {
//   const { data } = useQuery({
//     queryKey: ['pokemon'],
//     queryFn: () => getPokemonById(),
//   })
// }

export function generateRandomPokemonNumber() {
  return Math.floor(Math.random() * 898) + 1
}
