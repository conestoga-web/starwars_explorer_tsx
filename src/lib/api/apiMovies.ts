import axios from 'axios';

export const getMovie = (id: number) =>
  axios.get(`https://swapi.dev/api/films/${id}/`);

export const getMovies = () => {
  const movies = axios.get(`https://swapi.dev/api/films/`);
  console.log("channy: ", movies);
  return movies;
}
