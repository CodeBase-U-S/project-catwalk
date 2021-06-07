const express = require('express');
const axios = require('axios');
// const config = require('../config.js');



const atelierHelper = {

  getProductData: (req, res) => {
    let options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products`,
      headers: {
        'Authorization': `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`
      }
    }
    axios(options)
      .then(response => {
        res.status(200).send(response.data)
      })
      .catch(err => {
        console.log('err here is', err);
        res.status(400).send(err);
      })
  }
}





module.exports = atelierHelper;




// getData: (req, res, endpoint, query) => {

//   console.log(Object.keys(query)[0]);

//   let options = {
//     method: 'get',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/${endpoint}/${}`,
//     headers: {
//       'Authorization': `${config.TOKEN}`
//     }
//   }
//   axios(options)
//     .then(response => {
//       res.status(200).send(response.data)
//     })
//     .catch(err => {
//       console.log('err here is', err);
//       res.status(400).send(err);
//     })
// }