import axios from 'axios';

const API_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';
const API_KEY = '12526060-823e0f4842d06a1c968a99ad8';

export default function fetchPics(inputVal, page) {
  const RESULT_URL = `${API_URL}q=${inputVal.toLowerCase()}&page=${page}&per_page=12&key=${API_KEY}`;
  return axios.get(RESULT_URL).then(response => response.data.hits);
}
