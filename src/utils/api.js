import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWVmOWI1NzQ1ZWU0M2NlMDg2NjRhMWUwYTMwOGEzMyIsInN1YiI6IjY0MjBlZmI5NmEzNDQ4MDBlZjMwMjExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SiNE666oo2Ab9hI1ZkfkJ4maYNP-tJGTAbfRUc-5wMQ"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};




