// React
import React from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Mantine
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
  Indicator,
  Anchor,
} from "@mantine/core";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";

const User: React.FC = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin + "/auth/logout" });
  };

  return (
    <>
      <Box
        sx={{
          borderTop: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[2]
          }`,
        }}
      >
        <UnstyledButton
          onClick={() => {
            navigate("/profile");
          }}
          sx={{
            display: "block",
            width: "100%",
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
            },
          }}
        >
          <Group>
            <Indicator color={"green"}>
              <Avatar src={user?.picture || ""} radius="xl" />
            </Indicator>
            <Box sx={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                {user?.name}
              </Text>
              <Text color="dimmed" size="xs">
                {user?.email}
              </Text>
            </Box>
            <Anchor
            align="right"
            onClick={() => {
              handleLogout();
            }}
            size="xs"
          >
            Logout
          </Anchor>
          </Group>
        </UnstyledButton>
      </Box>      
    </>
  );
};

export { User };
