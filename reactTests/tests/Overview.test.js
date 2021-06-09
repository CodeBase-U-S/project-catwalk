/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import App from '../../client/src/components/App.jsx';
import Overview from '../../client/src/components/Overview/Overview.jsx';
import ProductInformation from '../../client/src/components/overview/ProductInformation.jsx'
import StarRating from '../../client/src/components/overview/StarRating.jsx'
import productTestData from './test-data-products.js';

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});



// SETUP & TEARDOWN
let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})



const testProduct = {
  "id": 132123,
  "campus": "hr-lax",
  "name": "Potato Jacket",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-02-23T03:29:57.827Z",
  "updated_at": "2021-02-23T03:29:57.827Z"
}


// #1. Checks that product information is rendered properly.
it("renders product data", async () => {


  act(() => {
    render(<ProductInformation product={testProduct} rating='4.1'/>, container);
  });
  expect(container.querySelector('#category').textContent).toBe('Jackets');
  expect(container.querySelector('#name').textContent).toBe('Potato Jacket');
  expect(container.querySelector('#price').textContent).toBe('$140.00');

});

// #2. Checks that review component does not render if there are no reviews
it('does not render review component if there are no reviews', async () => {
  const testReviews = {
      "product": "16056",
      "page": 0,
      "count": 0,
      "results": []
  }

  const testReviews2 = {
    "product": "16056",
    "page": 0,
    "count": 0,
    "results": [
      { "rating": 1 }, { "rating": 3 }, { "rating": 5 }, { "rating": 3 }, { "rating": 2 },
      { "rating": 3 }, { "rating": 5 }, { "rating": 1 }, { "rating": 4 }, { "rating": 5 }
    ]
}

  act(() => {
    render(<Overview product={testProduct} reviews={testReviews.results}/>, container);
  });

  expect(container.querySelector('#star_rating')).toBeFalsy()
  expect(container.querySelector('#star_rating')).toBeTruthy()

});

// #2. Renders the appropriate average rating based on the data
it('should render star ratings if there are reviews', async () => {
  const testReviews = {
      "product": "16056",
      "page": 0,
      "count": 0,
      "results": [
        { "rating": 1 }, { "rating": 3 }, { "rating": 5 }, { "rating": 3 }, { "rating": 2 },
        { "rating": 3 }, { "rating": 5 }, { "rating": 1 }, { "rating": 4 }, { "rating": 5 }
      ]
  }

  act(() => {
    render(<ProductInformation product={testProduct} rating={4.3}/>, container);
  });
  expect(container.querySelector('#star_rating')).toBeTruthy()

});





// it('does not render review component if there are no reviews', async () => {
//   const testReviews = {
//       "product": "16056",
//       "page": 0,
//       "count": 0,
//       "results": []
//   }
//   const spy = jest.spyOn(axios, 'get');

//   act(() => {
//     render(<Overview />, container);
//   });

//   expect(spy).toHaveBeenCalledTimes(2)
// });