export type IAction = { 
  type: string 
  payload?: any
}

export type IMovie = {
  id?: number
  title: string
  episode_id: number
  director: string
  producer: string
  release_date: string
  opening_crawl: string
}

export type IPeople = {
  id?: number
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  gener: string
  birth_year: string
}

export type IPlanet = {
  id?: number
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  population: string
}