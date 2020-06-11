import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import { FiMenu } from "react-icons/fi";

import { social } from "../../config/site";
import axios from "axios";

import * as S from "./styles";

interface Profile {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
}

const Header: React.FC = () => {
  const [size, setSize] = useState(0);
  const [navContainer, setNavContainer] = useState(null);
  const [github, setGithub] = useState<Profile>();
  const navContainerRef = useRef(null);
  const [button, setButton] = useState<HTMLElement>({} as HTMLElement);
 
  useEffect(() => {
    const widthSize = window.innerWidth;
    setSize(Number(widthSize));
    setNavContainer(navContainerRef.current);

    function handleButton() {    
      if (size !== 0 && size < 700) {
        const btn = React.createElement('S.Button', null, <FiMenu />);
        setButton(btn);
      } else if (size > 700) {
        console.log('Maior');
      }
    }

    handleButton();
  }, [size]);

  useEffect(() => {
    axios.get("https://api.github.com/users/ediano").then((response) => {
      setGithub(response.data);
    });
  }, []);

  return (
    <S.Header>
      <S.Nav>
        <S.NavContainer ref={navContainerRef}>
          <S.Ul>
            {social.map((item) => (
              <S.Li key={item.title}>
                <S.LiLink
                  href={`${item.url}/${item.userName}`}
                  rel="noopener"
                  target="black"
                >
                  {item.ico}
                </S.LiLink>
              </S.Li>
            ))}
          </S.Ul>

          <S.Logo>
            <S.LogoLink to="/">
              <S.LogoImg src={github?.avatar_url} alt={github?.name} />
            </S.LogoLink>
          </S.Logo>

          {button ? button : ''}
        </S.NavContainer>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
