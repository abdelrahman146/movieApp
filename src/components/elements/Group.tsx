import styled from "@emotion/styled";
import { Size } from "./types";

const Group = styled.div<{
  justify?: "start" | "end" | "space-between";
  align?: "start" | "baseline" | "center";
  gap?: Size;
}>(({ theme, ...props }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: props.justify || "start",
  alignItems: props.align || "center",
  ...(props.gap
    ? {
        gap:
          typeof props.gap === "number" ? props.gap : theme.spacing[props.gap],
      }
    : {}),
}));

export default Group;
