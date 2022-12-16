// Mantine
import {
  Button,
  Center,
  Container,  
  Paper,
  Title,
  createStyles,
} from "@mantine/core";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// Global - App Context
import imgBackground from "assets/img/background.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "105vh",
    minHeight: 900,    
    backgroundSize: "contain",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${imgBackground})`,
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    height: "100vh",
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const PageAuthLogin: React.FC = () => {
  const { classes } = useStyles();
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Center style={{ height: "100%", width: "100%" }}>
            <Container>
              <Title
                order={2}
                className={classes.title}
                align="center"
                mt="md"
                mb="md"
              >
                Welcome back!
              </Title>
              <Button
                fullWidth
                mt="xl"
                onClick={() => {
                  handleLogin();
                }}
                size="md"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
              >
                Login!
              </Button>              
            </Container>
          </Center>
        </Paper>
      </div>
    </>
  );
};

export default PageAuthLogin;
