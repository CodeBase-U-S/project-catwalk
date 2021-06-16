import axios from 'axios';
import { useDispatch } from 'react-redux';


// api options data
import TOKEN from '../../../config.js';
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const auth = { headers: { Authorization: TOKEN.TOKEN } };



export default {
  // getStyles: (id) => {
  //   if (id) {
  //     axios.get(`${url}/products/${id}/styles`, auth)
  //       .then(({ data }) => {
  //         dispatch({ type: 'SET_STYLE', style: data});
  //       });
  //   }
  // },

  addToCart: (dispatch, sku) => {
    let options = {
      method: 'POST',
      url: `${url}/cart`,
      headers: { Authorization: TOKEN.TOKEN },
      data: {['sku_id']: sku}
    };

    axios(options)
      .then((res) => {
        axios.get(`${url}/cart`, auth)
          .then((res) => {
            return dispatch({type: 'GET_CART', cart: res.data});
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};