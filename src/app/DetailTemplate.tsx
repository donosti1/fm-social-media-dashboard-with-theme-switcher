import React from "react";
import {Image, Stack, Text, useColorModeValue} from "@chakra-ui/react";

import Trend from "./Trend";

const DetailTemplate = (props: any) => {
  //const sliderImage = `/assets/${props.image}`;

  const cardColor = useColorModeValue("lightMode.300", "darkMode.700");
  const hoverColor = useColorModeValue("lightMode.400", "darkMode.800");

  const strongColor = useColorModeValue("lightMode.900", "whiteAlpha.900");
  const labelColor = useColorModeValue("lightMode.700", "darkMode.900");
  const icon = `/assets/${props.icon}`;

  return (
    <Stack
      _hover={{background: hoverColor, cursor: "pointer"}}
      background={cardColor}
      borderRadius={5}
      color="primary.500"
      height={[null, 28]}
      justifyContent="space-between"
      paddingX={[8, 4]}
      paddingY={[6, 4]}
      spacing={[6, 2]}
    >
      <Stack alignItems="center" direction="row" justifyContent="space-between" width="100%">
        <Text color={labelColor} fontSize="xs" fontWeight="700">
          {props.title}
        </Text>
        <Image alt="social network logo" height={5} src={icon} width={5} />
      </Stack>
      <Stack alignItems="center" direction="row" justifyContent="space-between" width="100%">
        <Text color={strongColor} fontSize="3xl" fontWeight="700">
          {props.value}
        </Text>
        <Trend trendUp={props.trendUp} trendlabel={props.trendlabel} />
      </Stack>
    </Stack>
  );
};

export default DetailTemplate;
