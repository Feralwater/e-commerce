import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import {FETCH_PRODUCTS} from "../types";

const CARD_QUERY = gql`
    query {
        category {
            products {
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
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export const fetchProducts = () => async (dispatch) => {
  const response = await client.query({query: CARD_QUERY})
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data.category.products
  })
}
