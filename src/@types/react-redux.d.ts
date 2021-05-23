import 'react-redux';
import { AppState } from '../modules';

declare module 'react-redux' {
    interface DefaultRootState extends AppState {
      planet: {
          planet: {
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
      },
      planetList: {
          planetList: []
      },
      people: {
          people: {
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
      },
      peopleList: {
          peopleList: []
      },
      movie: {
          movie: {
              id?: number
              title: string
              episode_id: number
              director: string
              producer: string
              release_date: string
              opening_crawl: string
          }
      },
      movieList: {
          movieList: {}
      },
      loading: boolean
    };
  }