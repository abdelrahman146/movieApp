import { css } from "@emotion/react";
import { FC } from "react";
import { AlertTriangle } from "tabler-icons-react";

const ErrorComponent: FC<{ message: string }> = ({ message }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        margin-block: 10px;
        .icon {
          color: indianred;
        }
      `}
    >
      <div className="icon">
        <AlertTriangle size={96} />
      </div>
      <div className="message">{message}</div>
    </div>
  );
};

export default ErrorComponent;
