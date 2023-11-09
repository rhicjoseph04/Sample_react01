import React from 'react';
import Allcards from '../components/Allcards';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
  font-family: 'Arial', sans-serif; 
  font-style: italic;
  color: #fff; 
  padding: 20px 0; 
`;

function Shop() {
  const { user } = useAuth0();

  return (
    <div>
      <Nav />
      <StyledH1>
      {user ? (
        <h1>Enjoy Shopping, Hi {user.name}</h1>
      ) : (
        <h1>Enjoy Shopping</h1>
      )}
      </StyledH1>
      <Allcards />
      <Footer />
    </div>
  );
}

export default Shop;


