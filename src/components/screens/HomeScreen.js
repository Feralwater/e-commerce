import React from 'react';
import { Container, Main } from '../../styleComponents/HomeStyles';
import '../../fonts/fonts.css';
import Products from '../products/Products';
import Header from '../header/Header';

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header />
        <Main>
          <Products />
        </Main>
      </Container>
    );
  }
}

export default HomeScreen;
