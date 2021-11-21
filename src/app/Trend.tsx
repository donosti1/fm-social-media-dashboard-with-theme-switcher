import React from "react";
import {Image, Stack, Text} from "@chakra-ui/react";

const Trend = (props: any) => {
  const icon = props.trendUp ? "/assets/icon-up.svg" : "/assets/icon-down.svg";
  const color = props.trendUp ? "branding.300" : "branding.400";

  return (
    <Stack alignItems="center" direction="row">
      <Image alt="icon" height={2} src={icon} width={2} />
      <Text color={color} fontSize="xs" fontWeight="700">
        {props.trendlabel}
      </Text>
    </Stack>
  );
};

export default Trend;
