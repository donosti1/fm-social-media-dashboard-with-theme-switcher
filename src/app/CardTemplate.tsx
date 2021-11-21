import React from "react";
import {Image, Stack, Text, useColorModeValue} from "@chakra-ui/react";

import Trend from "./Trend";
/*import cardInfo from "./cardlInfo";
 const result = cardInfo
  .filter((it) => it.key == "youtube")
  .reduce((acc, key) => {
    return key;
  });

console.log(result); */

const CardTemplate = (props: any) => {
  /*const item = cardInfo
    .filter((it) => it.key == props.item)
    .reduce((acc, key) => {
      return key;
    }); */
  /* REFACTORED: COMPONENT SHOULD FILTER OR ONLY RENDER WITH SENT PROPS? */
  const cardColor = useColorModeValue(
    "var(--chakra-colors-lightMode-300)",
    "var(--chakra-colors-darkMode-700)",
  );
  const hoverColor = useColorModeValue(
    "var(--chakra-colors-lightMode-400)",
    "var(--chakra-colors-darkMode-800)",
  ); //Color passed as CSS Var needed to style border with gradient.

  const strongColor = useColorModeValue("lightMode.900", "whiteAlpha800");
  const labelColor = useColorModeValue("lightMode.900", "darkMode.900");
  const icon = `/assets/${props.icon}`;

  console.log(props);
  const borderColor =
    props.network != "instagram"
      ? `linear-gradient(${cardColor},${cardColor}) padding-box, linear-gradient(to right,var(--chakra-colors-branding-${props.color}),var(--chakra-colors-branding-${props.color})) border-box`
      : `linear-gradient(${cardColor},${cardColor}) padding-box, linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) border-box`;

  const bgwborderHoverColor =
    props.network != "instagram"
      ? `linear-gradient(${hoverColor},${hoverColor}) padding-box, linear-gradient(to right,var(--chakra-colors-branding-${props.color}),var(--chakra-colors-branding-${props.color})) border-box`
      : `linear-gradient(${hoverColor},${hoverColor}) padding-box, linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) border-box`;
  /*   console.log(borderColor);

  console.log("linear-gradient(to bottom,  rgba(255,255,255,.6) 1%, rgba(255,255,255,.6) 5%)"); */

  return (
    <Stack
      _hover={{background: bgwborderHoverColor, cursor: "pointer"}}
      alignItems="center"
      alignSelf="center"
      background={borderColor}
      borderRadius={5}
      borderTop="4px solid transparent"
      color="primary.500"
      paddingY={[6, 4]}
      position="relative"
      spacing={[0, 0]}
    >
      <Stack alignItems="center" direction="row" paddingTop={[2, 0]}>
        <Image alt="social network logo" height={[5, 4]} src={icon} width={[5, 4]} />
        <Text color={labelColor} fontSize="xs" fontWeight="700">
          {props.title}
        </Text>
      </Stack>
      <Text color={strongColor} fontSize="5xl" fontWeight="700" lineHeight="1" paddingTop={4}>
        {props.followers}
      </Text>
      <Text
        color={labelColor}
        fontSize="xs"
        letterSpacing="3px"
        paddingBottom={[6, 4]}
        textTransform="uppercase"
      >
        {props.label}
      </Text>
      <Trend trendUp={props.trendUp} trendlabel={props.trendlabel} />
    </Stack>
  );
};

export default CardTemplate;
