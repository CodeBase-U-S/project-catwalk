/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Overview from '../../client/src/components/Overview.jsx';
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

it("renders", () => {
  act(() => {
    render(<Overview />, container);
  });
  expect(container.textContent).toBe("Hello from Overview");
});

it("renders product data", async () => {
  const testProduct = {
    "id": 132123,
    "campus": "hr-lax",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-02-23T03:29:57.827Z",
    "updated_at": "2021-02-23T03:29:57.827Z"
  }

  act(() => {
    render(<Overview />, container);
      jest.spyOn(Overview, 'this.fetchData', 'get').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(testProduct)
      })
        .then(() => {
          expect(container.textContent).toBe("Jackets")
        })
    );
  })

  // act(() => {
  //   render(<Overview />, container);
  // });
  // expect(container.textContent).toBe("Hello from Overview");

  // act(() => {
  //   render(<ProductInformation />, container);
  // });
  // expect(container.querySelector('category')).toBe("Jackets");
});
