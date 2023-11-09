import styled from "styled-components";

export const Box = styled.div`
  padding: 1rem 0.5rem; 
  background: radial-gradient(circle, #23074d, #0a043c);
  bottom: 0;
  width: 100%;
  margin: 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 10px auto; 
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(185px, 1fr)
  );
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(200px, 1fr)
    );
  }
`;

export const FooterLink = styled.a`
  color: orange; /* Change the color to orange */
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
  cursor: pointer;
`;

export const Heading = styled.p`
  color: white; 
  margin-bottom: 20px;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.2s; 
  &:hover {
    color: orange;
  }
`;