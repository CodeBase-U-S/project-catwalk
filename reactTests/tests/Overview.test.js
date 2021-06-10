/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode, mount } from 'react-dom';
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


describe('Overview renders Product Information', () => {



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

    act(() => {
      render(<Overview product={testProduct} reviews={testReviews.results}/>, container);
    });

    act(() => {
      render(<Overview product={testProduct} reviews={undefined}/>, container);
    });

    expect(container.querySelector('#star_rating')).toBeFalsy()

  });

  // #3. Renders star rating if there are reviews
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
      render(<Overview product={testProduct} reviews={testReviews.results}/>, container);
    });

    expect(container.querySelector('#star_rating')).toBeTruthy()
  });


    // #4. Renders the appropriate average rating based on the data
    it('should render the correct number of stars', async () => {
      const testReviews = [
          { "rating": 1 }, { "rating": 3 }, { "rating": 5 }, { "rating": 3 }, { "rating": 2 },
          { "rating": 3 }, { "rating": 5 }, { "rating": 1 }, { "rating": 4 }, { "rating": 5 }
        ]

      act(() => {
        render(<Overview product={testProduct} reviews={testReviews}/>, container);
      });
      expect(container.getElementsByClassName('bi bi-star-fill').length).toBe(3);
      expect(container.getElementsByClassName('bi bi-star-half').length).toBe(0);
      expect(container.getElementsByClassName('bi bi-star').length).toBe(2);

      act(() => {
        render(<StarRating rating='3.2'/>, container);
      });
      expect(container.getElementsByClassName('bi bi-star-fill').length).toBe(3);
      expect(container.getElementsByClassName('bi bi-star-half').length).toBe(0);
      expect(container.getElementsByClassName('bi bi-star').length).toBe(2);

      act(() => {
        render(<StarRating rating='5'/>, container);
      });
      expect(container.getElementsByClassName('bi bi-star-fill').length).toBe(5);
      expect(container.getElementsByClassName('bi bi-star-half').length).toBe(0);
      expect(container.getElementsByClassName('bi bi-star').length).toBe(0);


      act(() => {
        render(<StarRating rating='2.6'/>, container);
      });
      expect(container.getElementsByClassName('bi bi-star-fill').length).toBe(2);
      expect(container.getElementsByClassName('bi bi-star-half').length).toBe(1);
      expect(container.getElementsByClassName('bi bi-star').length).toBe(2);

      act(() => {
        render(<StarRating rating='0'/>, container);
      });
      expect(container.getElementsByClassName('bi bi-star-fill').length).toBe(0);
      expect(container.getElementsByClassName('bi bi-star-half').length).toBe(0);
      expect(container.getElementsByClassName('bi bi-star').length).toBe(5);

      act(() => {
        render(<StarRating rating='1.8'/>, container);
      });
      expect(container.getElementsByClassName('bi bi-star-fill').length).toBe(1);
      expect(container.getElementsByClassName('bi bi-star-half').length).toBe(1);
      expect(container.getElementsByClassName('bi bi-star').length).toBe(3);

      act(() => {
        render(<StarRating rating='3.9'/>, container);
      });
      expect(container.getElementsByClassName('bi bi-star-fill').length).toBe(3);
      expect(container.getElementsByClassName('bi bi-star-half').length).toBe(1);
      expect(container.getElementsByClassName('bi bi-star').length).toBe(1);

      act(() => {
        render(<StarRating rating='4.5'/>, container);
      });
      expect(container.getElementsByClassName('bi bi-star-fill').length).toBe(4);
      expect(container.getElementsByClassName('bi bi-star-half').length).toBe(1);
      expect(container.getElementsByClassName('bi bi-star').length).toBe(0);

      act(() => {
        render(<StarRating rating='0.8'/>, container);
      });
      expect(container.getElementsByClassName('bi bi-star-fill').length).toBe(0);
      expect(container.getElementsByClassName('bi bi-star-half').length).toBe(1);
      expect(container.getElementsByClassName('bi bi-star').length).toBe(4);
    });


})

