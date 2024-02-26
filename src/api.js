import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos/" //https://api.unsplash.com/
const API_KEY = "ABEJXy41ZSDRXtJ1L7s0F6YyG15DZ-Au-_aR3B2VujE";

export const fetchArticles = async (query, page) => {
  const response = await axios.get(API_URL, {
    params: { query, client_id: API_KEY, page, per_page: 12 },
  });
  console.log(response.data);
  return response.data;
};