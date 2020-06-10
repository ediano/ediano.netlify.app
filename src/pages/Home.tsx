import React from "react";

import Layout from "../components/Layout";
import Repos from "../components/Repos";

import * as S from "./styles";

const Home = () => {
  return (
    <Layout>
      <S.Main>
        <Repos />
      </S.Main>
    </Layout>
  );
};

export default Home;
