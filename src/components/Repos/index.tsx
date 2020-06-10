import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styles";

interface License {
  name: string;
}

interface Repos {
  id: number;
  name: string;
  description: string;
  html_url: string;
  license?: License;
}

const Repos = () => {
  const [repos, setRepos] = useState<Repos[]>([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/ediano/repos").then((response) => {
      setRepos(response.data);
    });
  }, []);

  return (
    <S.Section>
      <S.SectionContainer>
        {repos.map((item) => (
          <S.Content key={item.id}>
            <S.ContentTitle>{item.name}</S.ContentTitle>

            <S.ContentDescription>{item.description}</S.ContentDescription>

            <S.ContentLink>
              <S.Link href={item.html_url}>Acessar repositório</S.Link>
              <S.License>{item.license ? item.license.name : "Not"}</S.License>
            </S.ContentLink>
          </S.Content>
        ))}
      </S.SectionContainer>
    </S.Section>
  );
};

export default Repos;
