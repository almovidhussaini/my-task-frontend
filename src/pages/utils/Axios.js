import axios from 'axios';
const customFetch = axios.create({

  baseURL: 'https://tan-curious-bat.cyclic.app/',
  
});

export default customFetch;