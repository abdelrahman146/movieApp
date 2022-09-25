import styled from "@emotion/styled";
import mq from "../../theme/mediaQueries";

export default styled.div`
  .discover {
    position: relative;
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.primary[1]};
    padding-inline: 2em;
    padding-block: 4em;
    width: 100%;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    display: grid;
    gap: 1em;
    .welcome {
      color: white;
      h1 {
        margin-bottom: 0.2em;
      }
    }
  }
  .content {
    width: 100%;
    margin-block: ${({ theme }) => theme.spacing.xl}px;
  }
  .list {
    position: relative;
    z-index: 1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.xl}px;
    ${mq.md} {
      grid-template-columns: repeat(3, 1fr);
    }
    ${mq.lg} {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
