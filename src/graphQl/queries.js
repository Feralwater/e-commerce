import { gql } from '@apollo/client';

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

export const getCategories = gql`
  query {
    category {
      products {
        category
      }
    }
  }
`;

export const getCurrencies = gql`
  query {
    currencies
  }
`;
