import { gql } from '@apollo/client';
import { FETCH_PRODUCTS } from '../types';
import client from '../graphQl/client';

export const getItemsByCategory = gql`
  query getItemsByCategory($title: String!) {
    category(input: { title: $title }) {
      products {
        category
        inStock
        gallery
        name
        description
        prices {
          currency
          amount
        }
        attributes {
          name
          type
          items {
            displayValue
            value
          }
        }
      }
    }
  }
`;

export const fetchProducts = (category) => async (dispatch) => {
  const response = await client.query({ query: getItemsByCategory, variables: { title: category === 'all' ? '' : category } });
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data.category.products,
  });
};
