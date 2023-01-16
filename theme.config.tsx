import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>@engage_intellect docs</span>,
  project: {
    link: "https://github.com/engageintellect/engageintellect_docs",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase:
    "https://github.com/engageintellect/engageintellect_docs/blob",
  footer: {
    text: "@engage_intellect docs",
  },
};

export default config;
