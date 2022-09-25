import { keyframes } from "@emotion/react";

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: TranslateY(0);
  }
`;

export const loading = keyframes`
  from {
    background-color: hsl(200, 20%, 70%);
  }
  to {
    background-color: hsl(200, 20%, 95%);
  }
`;
