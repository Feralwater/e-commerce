import { gql } from '@apollo/client';
import { FETCH_PRODUCTS } from '../types';
import client from '../graphQl/client';

const CARD_QUERY = gql`
  query {
    category {
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
          type
          name
          items {
            displayValue
            value
          }
        }
      }
    }
  }
`;

export const fetchProducts = () => async (dispatch) => {
  const response = await client.query({ query: CARD_QUERY });
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data.category.products,
  });
};
