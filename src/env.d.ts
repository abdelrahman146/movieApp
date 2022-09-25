import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends Record<string, any> {
    id: string;
    name: string;
    colors: {
      body: [string, string, string];
      text: [string, string, string];
      primary: [string, string, string];
      secondary: [string, string, string];
    };
    font: string;
    spacing: { xs: number; sm: number; md: number; lg: number; xl: number };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
