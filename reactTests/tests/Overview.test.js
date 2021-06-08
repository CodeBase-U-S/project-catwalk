/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import Overview from '../../client/src/components/Overview.jsx';
import ProductInformation from '../../client/src/components/overview/ProductInformation.jsx'
import productTestData from './test-data-products.js';

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

// it("renders", () => {
//   act(() => {
//     render(<Overview />, container);
//   });
//   expect(container.textContent).toBe("Hello from Overview");
// });


// Checks that product information is rendered properly.
it("renders product data", async () => {
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

  act(() => {
    render(<ProductInformation data={testProduct}/>, container);
  });
  expect(container.querySelector('#category').textContent).toBe('Jackets');
  expect(container.querySelector('#name').textContent).toBe('Potato Jacket');
  expect(container.querySelector('#price').textContent).toBe('$140.00');

});

it('does not render review component if there are no reviews', async () => {
  const testReviews = {
      "product": "16056",
      "page": 0,
      "count": 0,
      "results": []
  }
  const spy = jest.spyOn(axios, 'get');

  act(() => {
    render(<Overview />, container);
  });
  // const mockFn = jest.fn();
  // expect(mockFn).toHaveBeenCalled();

  expect(spy).toHaveBeenCalledTimes(2)



});