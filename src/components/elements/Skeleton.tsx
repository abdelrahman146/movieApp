import styled from "@emotion/styled";
import { Size } from "./types";
import { loading } from "../../theme/animations";

const Skeleton = styled.div<{
  h?: number | string;
  w?: number | string;
  borderRadius?: number | string;
}>(({ h, w, borderRadius }) => ({
  all: "unset",
  opacity: 0.7,
  animation: `${loading} 1s linear infinite alternate`,
  ...(h ? { height: h } : {}),
  ...(w ? { width: w } : {}),
  ...(borderRadius ? { borderRadius } : {}),
}));

export default Skeleton;
