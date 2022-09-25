import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import mq from "../../theme/mediaQueries";

const StyledCard = styled(Link)`
  background: ${({ theme }) => theme.colors.body[0]};
  border-radius: 0.5em;
  border: 1px ${({ theme }) => theme.colors.body[2]} solid;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  overflow: hidden;
  display: grid;
  grid-template-rows: min-content;
  transition: transform 0.3s ease-out;
  &:hover {
    transform: scale(1.03);
  }
  img {
    margin-inline: auto;
    height: 16em;
    object-fit: fill;
    ${mq.sm} {
      object-fit: cover;
    }
    ${mq.md} {
      height: 20em;
    }
    ${mq.xl} {
      object-fit: cover;
      height: 24em;
    }
    width: 100%;
    aspect-ratio: 9 / 16;
  }
  .title {
    font-size: ${({ theme }) => theme.fontSize.md};
    text-align: center;
    padding: ${({ theme }) => theme.spacing.md}px;
  }
`;
const Card: FC<{
  poster: string;
  title: string;
  year: number;
  link: string;
}> = ({ poster, title, year, link }) => {
  return (
    <StyledCard to={link}>
      <img src={poster} alt={title} />
      <p className="title">
        {title} ({year})
      </p>
    </StyledCard>
  );
};

export default Card;
