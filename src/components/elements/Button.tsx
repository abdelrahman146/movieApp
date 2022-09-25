import styled from "@emotion/styled";
import { Size } from "./types";

const Button = styled.button<{
  size: Size;
  variant: "primary" | "secondary" | "dark" | "light";
}>(({ theme, size, variant }) => ({
  all: "unset",
  cursor: "pointer",
  textAlign: "center",
  borderRadius: 5,
  ...(variant === "primary" || variant === "secondary"
    ? { color: "white" }
    : { color: theme.colors.text[0] }),
  ...(size
    ? { fontSize: typeof size === "number" ? size : theme.spacing[size] }
    : {}),
  ...(size
    ? { padding: typeof size === "number" ? size : theme.spacing[size] }
    : {}),
  ...(variant === "primary" && { backgroundColor: theme.colors.primary[1] }),
  ...(variant === "secondary" && {
    backgroundColor: theme.colors.secondary[1],
  }),
  ...(variant === "dark" && {
    backgroundColor: "rgba(0,0,0,0.1);",
  }),
  ...(variant === "light" && {
    backgroundColor: "rgba(255,255,255,0.7);",
  }),
  fontWeight: 600,
  ":hover": {
    ...(variant === "primary" && { backgroundColor: theme.colors.primary[2] }),
    ...(variant === "secondary" && {
      backgroundColor: theme.colors.secondary[2],
    }),
    ...(variant === "dark" && {
      backgroundColor: "rgba(0,0,0,0.2);",
    }),
    ...(variant === "light" && {
      backgroundColor: "rgba(255,255,255,0.9);",
    }),
  },
}));

export default Button;
