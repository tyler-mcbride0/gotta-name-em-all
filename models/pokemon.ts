export interface PokemonGeneration {
  id: number
  locations: MainGeneration[]
  main_generation: MainGeneration
  name: string
  names: Name[]
  pokedexes: MainGeneration[]
  version_groups: MainGeneration[]
}

export interface MainGeneration {
  name: string
  url: string
}

export interface Name {
  language: MainGeneration
  name: string
}
export interface SearchResult {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface Result {
  name: string
  url: string
}

export interface Pokemon {
  id: number
  name: string
  sprites: Sprites
}

export interface Sprites {
  front_default: string
  front_shiny: string
  front_shiny_female: null
}

export interface SpecificPokemonProps {
  name: string
}
