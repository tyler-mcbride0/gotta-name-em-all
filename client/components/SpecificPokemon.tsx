import { useQuery } from '@tanstack/react-query'
import { getSpecificPokemon } from '../apis/pokemon'
import { SpecificPokemonProps } from '../../models/pokemon'

export default function SpecificPokemon(params: SpecificPokemonProps) {
  const answer = params.name
  const { isLoading, isError, data } = useQuery({
    queryKey: [params],
    queryFn: async () => getSpecificPokemon(answer),
  })
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: Something went wrong!</div>

  return (
    <>
      <div className="image-container">
        <img
          src={`${data?.sprites.front_default}`}
          alt="a mysterious pokemon"
        />
      </div>
    </>
  )
}
