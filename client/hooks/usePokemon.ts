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

// export function generateRandomPokemon(){
//   const { isLoading, isError, data } = useQuery({
//     queryKey: ['randomPokemon'],
//     queryFn: async () => getAllPokemon(),

//   })
//   // if (isLoading) {
//   //   return <div>Loading...</div>
//   // }

//   // if (isError){
//   //   return <div>Error: Something went wrong!</div>
//   // }

//   console.log(data)

//   function chooseRandomPokemon(pokemonList: any, n) {
//     const randomPokemon = []
//     for (let i = 0; i < n; i++) {
//       const randomIndex = Math.floor(Math.random() * pokemonList.results.length)
//       randomPokemon.push(pokemonList.results[randomIndex])
//     }
//     return randomPokemon
//   }
// }
