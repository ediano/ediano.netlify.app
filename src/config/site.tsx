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
  author: 'Ediano Silva Santos',
};

export const social = [
  {
    title: "GitHub",
    url: "https://github.com",
    userName: "ediano",
  },
  {
    title: "Twitter",
    url: "https://twitter.com",
    userName: "edianoss",
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com",
    userName: "edianoss",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in",
    userName: "ediano",
  },
];
