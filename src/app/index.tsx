import React from "react";
import {
  Grid,
  Stack,
  StackDivider,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import CardTemplate from "./CardTemplate";
import cardInfo from "./cardlInfo";
import DetailTemplate from "./DetailTemplate";
import detailInfo from "./detailInfo";

const App: React.FC = () => {
  const {toggleColorMode} = useColorMode();

  const topBgColor = useColorModeValue("lightMode.100", "darkMode.500");
  const bottomBgColor = useColorModeValue("white", "darkMode.300");
  const strongColor = useColorModeValue("lightMode.900", "whiteAlpha.900");
  const labelColor = useColorModeValue("lightMode.700", "darkMode.900");

  const topCards = cardInfo.map((de) => {
    return <CardTemplate {...de} key={de.id} />;
  });

  const detailCards = detailInfo.map((de) => {
    return <DetailTemplate {...de} key={de.id} />;
  });

  return (
    <>
      <Stack backgroundColor={bottomBgColor} height="100vh" position="absolute" width="100%">
        <Stack
          backgroundColor={topBgColor}
          borderBottomRadius="xl"
          height={["38vh", "30vh"]}
          width="100%"
        />
      </Stack>
      <Stack
        /* backgroundColor="white" */
        /* backgroundImage={["url('/assets/pattern-curve.svg'), url('/assets/pattern-bg.svg')"]} */
        backgroundPosition={["50%  100%, 50% 0%", "0%  100%, 80% 50%"]}
        backgroundRepeat={["no-repeat, no-repeat", "no-repeat, no-repeat"]}
        backgroundSize={["contain, 90%", "50% , 46%"]}
        height={["auto", "100vh"]}
        justifyContent="center"
        paddingX={[6, 40]}
        position="absolute"
        role="main"
        width="100%"
      >
        <Stack direction={["column", "row"]} justifyContent="space-between">
          <Stack paddingBottom={[4, 0]} paddingTop={[8, 0]} spacing={0}>
            <Text as="h1" color={strongColor} fontSize="3xl" fontWeight="700">
              Social Media Dashboard
            </Text>
            <Text color={labelColor} fontSize="sm" fontWeight="700">
              Total Followers: 23,004
            </Text>
          </Stack>
          <StackDivider
            borderColor="lightMode.700"
            borderWidth={1}
            display={["block", "none"]}
            role="separator"
          />
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            paddingTop={[4, 0]}
          >
            <Text color={labelColor} fontSize="sm" fontWeight="700">
              Dark mode
            </Text>
            <Switch size="md" transform="rotate(180deg)" onChange={toggleColorMode} />
          </Stack>
        </Stack>
        <Grid gap={6} paddingTop={6} templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}>
          {topCards}
        </Grid>
        <Text
          as="h3"
          color={strongColor}
          fontSize="2xl"
          fontWeight="700"
          paddingBottom={4}
          paddingTop={6}
        >
          Overview - Today
        </Text>
        <Grid gap={6} templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}>
          {detailCards}
        </Grid>
      </Stack>
      <Stack />
    </>
  );
};

export default App;
