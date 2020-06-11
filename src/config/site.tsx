import React from "react";
import {
  FiGithub,
  FiFacebook,
  FiTwitter,
  FiLinkedin
} from "react-icons/fi";

interface ConfigSite {
  title: string;
  url: string;
  description?: string;
  author: string;
}

export const site: ConfigSite = {
  title: "Ediano Silva Santos",
  url: "https://ediano.github.io",
  description: "Um pequeno blog pessoal...",
  author: "Ediano Silva Santos",
};

interface ConfigSocial {
  title: string;
  url: string;
  userName: string;
  ico: object;
}

const sizeIco = 30;

export const social: ConfigSocial[] = [
  {
    title: "GitHub",
    url: "https://github.com",
    userName: "ediano",
    ico: <FiGithub size={sizeIco} />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com",
    userName: "edianoss",
    ico: <FiTwitter size={sizeIco} />,
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com",
    userName: "edianoss",
    ico: <FiFacebook size={sizeIco} />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in",
    userName: "ediano",
    ico: <FiLinkedin size={sizeIco} />,
  },
];
