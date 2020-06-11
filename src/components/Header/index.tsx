import React, { useState, useEffect } from "react";
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
  const [navContainer, setNavContainer] = useState(false);
  const [startMenuUl, setStartMenuUl] = useState("");
  const [github, setGithub] = useState<Profile>();

  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });

  useEffect(() => {
    function handleWidth() {
      if (size !== 0 && size < 700) {
        setNavContainer(true);
      } else if (size > 700) {
        setNavContainer(false);
        setStartMenuUl("");
      }
    }

    handleWidth();
  }, [size]);

  useEffect(() => {
    axios.get("https://api.github.com/users/ediano").then((response) => {
      setGithub(response.data);
    });
  }, []);

  function handlaButton() {
    if (startMenuUl === "open") {
      setStartMenuUl("");
    } else {
      setStartMenuUl("open");
    }
  }

  return (
    <S.Header>
      <S.Nav>
        <S.NavContainer>
          <S.Ul className={startMenuUl}>
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

          {navContainer ? (
            <S.Button onClick={handlaButton}>
              <FiMenu size={30} />
            </S.Button>
          ) : (
            ""
          )}
        </S.NavContainer>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
