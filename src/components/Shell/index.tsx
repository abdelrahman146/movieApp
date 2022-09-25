import { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import { useAppTheme } from "../../theme/AppThemeProvider";
import { Sun, Moon } from "tabler-icons-react";
import Group from "../elements/Group";
import Button from "../elements/Button";
import { css } from "@emotion/react";

const Layout = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

const Header = styled.header(({ theme }) => ({
  backgroundColor: theme.colors.body[2],
  paddingBlock: theme.spacing.md,
}));

const Main = styled.main(({ theme }) => ({
  //   paddingBlock: theme.spacing.md,
}));

const Footer = styled.footer(({ theme }) => ({
  backgroundColor: theme.colors.body[2],
  marginTop: "auto",
  paddingBlock: theme.spacing.md,
}));

const Shell: FC<{ children: ReactNode }> = ({ children }) => {
  const { appTheme, setAppTheme } = useAppTheme();
  return (
    <Layout>
      <>
        <Header>
          <div className="container">
            <Group align="center" justify="space-between">
              <h1>MovieApp</h1>
              <div className="">
                {appTheme === "dark" && (
                  <Button
                    onClick={() => setAppTheme("light")}
                    size={"sm"}
                    variant="dark"
                  >
                    <Sun size={14} />
                  </Button>
                )}
                {appTheme === "light" && (
                  <Button
                    onClick={() => setAppTheme("dark")}
                    size={"sm"}
                    variant="dark"
                  >
                    <Moon size={14} />
                  </Button>
                )}
              </div>
            </Group>
          </div>
        </Header>
        <Main>
          <div className="container">{children}</div>
        </Main>
        <Footer>
          <div className="container">
            Developed By{" "}
            <a href="https://github.com/abdelrahman146" target="_blank">
              Abdel Rahman
            </a>
          </div>
        </Footer>
      </>
    </Layout>
  );
};

export default Shell;
