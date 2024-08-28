import axios from "axios";
import { apiKey } from "../Constants";

const baseURL = "https://api.themoviedb.org/3/";

const topRatedMoviesEndPoints = `${baseURL}/top_rated?api_key=${apiKey}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params? params: {}
  }

  try{
    const response = await axios.request(options);
    return response.data;
  }catch(error){
    console.log({'Error' : error});
  }
}

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndPoints)
}