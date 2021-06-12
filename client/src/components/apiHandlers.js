import axios from 'axios';
import { useDispatch } from 'react-redux';


// api options data
import TOKEN from '../../../config.js';
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const auth = { headers: { Authorization: TOKEN.TOKEN } };

export default {
  getStyles: (id) => {
    if (id) {
      axios.get(`${url}/products/${id}/styles`, auth)
        .then(({ data }) => {
          dispatch({ type: 'SET_STYLE', style: data});
        });
    }
  }
};
