import styled from "@emotion/styled";
import mq from "../../theme/mediaQueries";

export default styled.div`
  margin-block: ${({ theme }) => theme.spacing.xl}px;
  .header {
    margin-top: ${({ theme }) => theme.spacing.md}px;
    padding: ${({ theme }) => theme.spacing.xl}px;
    background-color: ${({ theme }) => theme.colors.body[2]};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg}px;
    border-radius: 10px;
    ${mq.md} {
      flex-direction: row;
    }
    .poster {
      border-radius: 10px;
      aspect-ratio: 3 / 4;
      object-fit: cover;
      height: 90vw;
      ${mq.md} {
        height: 50vw;
        width: 40%;
      }
      ${mq.lg} {
        height: 35vw;
        width: 30%;
      }
    }
    .content {
      flex: 1;
      .title {
        font-size: 3em;
      }
      p {
        text-align: justify;
      }
      .key {
        color: ${({ theme }) => theme.colors.primary[0]};
        font-weight: 600;
      }
      .value {
        color: ${({ theme }) => theme.colors.text[0]};
      }
    }
  }
`;
