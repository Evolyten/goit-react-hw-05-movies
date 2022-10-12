import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './LayoutStyled';
const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 0 20px 0 20px;
  font-size: 20px;

  &.active {
    color: red;
  }
`;
export const Layout = () => {
  return (
    <>
      <Header>
        <NavItem to={'/'} end>
          Home
        </NavItem>
        <NavItem to={'/movies'}>Movies</NavItem>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
