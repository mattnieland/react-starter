import { Group, Stack, Title } from "@mantine/core";
import imgSadPanda from "assets/img/sad-panda.png";
const Page404: React.FC = () => {
  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Group>
          <Stack>
            <Title align="center" order={1}>
              This Page
            </Title>
            <Title align="center" order={1}>
              Does Not Exist Yet
            </Title>
          </Stack>
          <img
            alt={imgSadPanda}
            src={imgSadPanda}
            style={{ maxWidth: "200px" }}
          />
        </Group>
      </div>
    </>
  );
};

export default Page404;
