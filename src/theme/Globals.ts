import { css, Theme } from "@emotion/react";

export default (theme: Theme) => {
  return css`
    * {
      transition: background-color 0.2s ease;
      box-sizing: border-box;
      user-select: none;
      margin: 0;
      padding: 0;
    }
    a {
      all: unset;
      cursor: pointer;
      color: ${theme.colors.primary[1]};
      &:hover {
        color: ${theme.colors.primary[2]};
      }
    }

    *:focus {
      outline: none;
    }
    body {
      background-color: ${theme.colors.body[1]};
      color: ${theme.colors.text[1]};
      font-family: ${theme.font};
      margin: 0;
    }
    .container {
      width: min(90%, 75rem);
      margin-inline: 5%;
      @media (min-width: 75rem) {
        margin-inline: auto;
      }
    }
  `;
};
