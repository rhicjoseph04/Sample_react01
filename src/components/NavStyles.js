import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  background: radial-gradient(circle, #23074d, #0a043c);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 30px;
`;

export const NavButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const UserInfo = styled.p`
  color: white;
  font-size: 20px;
  margin-right: 20px;
  align-self: center;
`;
