import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: block;
  width: 100%;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 64px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.5);
`;

export const NavContainer = styled.div`
  display: flex;
  width: 1200px;
  max-width: 85%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
`;

export const Logo = styled.div`
  padding: 0 15px;
  display: flex;
  height: 100%;

  @media (max-width: 700px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const LogoLink = styled(Link)`
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 0 2px 0 rgba(255, 255, 255, 0.15);
`;

export const Ul = styled.ul`
  padding: 0 15px;
  height: 100%;

  @media (min-width: 701px) {
    display: flex;
  }

  @media (max-width: 700px) {
    position: fixed;
    display: flex;
    transform: translateX(-105%);
    transition: 0.5s;
    width: 200px;
    height: 100%;
    background: #191919;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.5);
    padding: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 5;
    left: 0;

    ${(props) =>
      props.className &&
      css`
        transform: translateX(0%);
      `}
  }

  &:open {
    display: block !important;
  }
`;

export const Li = styled.li`
  list-style: none;
`;

export const LiLink = styled.a`
  padding: 0 15px;
  color: #a0a0a0;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 701px) {
    &:hover {
      background: #000;
    }
  }

  @media (max-width: 700px) {
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0 15px;
  background: transparent;
  color: #fff;
`;
