import React from "react";

import { site } from '../../config/site';

import * as S from './styles';

const Footer = () => (
  <S.Footer>
    <S.FooterContainer>
      {site.title} | {site.description}
    </S.FooterContainer>
  </S.Footer>
);

export default Footer;
