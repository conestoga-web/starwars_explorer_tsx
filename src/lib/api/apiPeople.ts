import axios from 'axios';

export const getPerson = (id: number) =>
  axios.get(`https://swapi.dev/api/people/${id}/`);

export const getPeople = async () => {

    const people = await axios.get('https://swapi.dev/api/people/');
    
    let totalPages: number = 0;
    const perPage: number = 10;
    const num: number = parseInt(people.data['count']);

    if (num % perPage) {
        totalPages = Math.round(num / perPage) + 1;
    } else {
        totalPages = num / perPage;
    }

    let allData = [];
    let morePagesAvailable = true;
    let currentPage = 0;

    while(morePagesAvailable) {
        currentPage++;
        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);

        response.data.results.forEach((e: string) => allData.push(e));
        morePagesAvailable = currentPage < totalPages;
    }
       
    return { data: allData };
}
