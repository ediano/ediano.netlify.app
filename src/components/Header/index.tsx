import React, { useState, useEffect } from "react";

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
  const [github, setGithub] = useState<Profile>();

  useEffect(() => {
    axios.get("https://api.github.com/users/ediano").then((response) => {
      setGithub(response.data);
    });
  }, []);

  return (
    <S.Header>
      <S.Nav>
        <S.NavContainer>
          <S.Ul>
            {social.map((item) => (
              <S.Li key={item.title}>
                <S.LiLink href={`${item.url}/${item.userName}`} rel="noopener" target="black">
                  {item.title}
                </S.LiLink>
              </S.Li>
            ))}
          </S.Ul>

          <S.Logo>
            <S.LogoLink to="/">
              <S.LogoImg src={github?.avatar_url} alt={github?.name} />
            </S.LogoLink>
          </S.Logo>
        </S.NavContainer>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
