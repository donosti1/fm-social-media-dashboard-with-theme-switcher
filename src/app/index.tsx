import React, {ComponentRef, useEffect} from "react";
import {Image, Stack, Text, useColorModeValue} from "@chakra-ui/react";

const cardInfo = [
  {
    key: "facebook",
    color: "500",
    colorType: "solid",
    icon: "icon-facebook.svg",
    title: "Bob",
    label: "followers",
    followers: "1987",
    trendUp: true,
    trendlabel: "12 Today",
  },
  {
    key: "twitter",
    color: "600",
    colorType: "solid",
    icon: "icon-twitter.svg",
    title: "Bob",
    label: "followers",
    followers: "1044",
    trendUp: true,
    trendlabel: "99 Today",
  },
  {
    key: "instagram",
    color: "",
    colorType: "solid",
    icon: "icon-youtube.svg",
    title: "Bob",
    label: "followers",
    followers: "11k",
    trendUp: false,
    trendlabel: "1099 Today",
  },
  {
    key: "youtube",
    color: "700",
    colorType: "solid",
    icon: "icon-youtube.svg",
    title: "Bob",
    label: "Subscribers",
    followers: 8239,
    trendUp: false,
    trendlabel: "144 Today",
  },
];

/* const result = cardInfo
  .filter((it) => it.key == "youtube")
  .reduce((acc, key) => {
    return key;
  });

console.log(result); */

const Trend = (props: any) => {
  const icon = props.trendUp ? "/assets/icon-up.svg" : "/assets/icon-down.svg";
  const color = props.trendUp ? "branding.300" : "branding.400";

  return (
    <Stack alignItems="center" direction="row">
      <Image alt="icon" height={2} src={icon} width={2} />
      <Text color={color} fontSize="xs">
        {props.trendlabel}
      </Text>
    </Stack>
  );
};
const CardTemplate = (props: any) => {
  //const sliderImage = `/assets/${props.image}`;

  const item = cardInfo
    .filter((it) => it.key == props.item)
    .reduce((acc, key) => {
      return key;
    });
  const cardColor = useColorModeValue("var(--chakra-colors-lightMode-300)", "darkMode.700");

  const strongColor = useColorModeValue("lightMode.900", "darkMode.700");
  const labelColor = useColorModeValue("lightMode.900", "darkMode.900");
  const icon = `/assets/${item.icon}`;
  const borderColor =
    item.key != "instagram"
      ? `linear-gradient(${cardColor},${cardColor}) padding-box, linear-gradient(to right,var(--chakra-colors-branding-${item.color}),var(--chakra-colors-branding-${item.color})) border-box`
      : `linear-gradient(${cardColor},${cardColor}) padding-box, linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) border-box`;

  /*   console.log(borderColor);

  console.log("linear-gradient(to bottom,  rgba(255,255,255,.6) 1%, rgba(255,255,255,.6) 5%)"); */

  return (
    <Stack
      alignItems="center"
      alignSelf="center"
      background={borderColor}
      borderRadius={5}
      borderTop="5px solid transparent"
      color="primary.500"
      flex={1}
      paddingX={[0, 12]}
      position="relative"
      spacing={[16, 0]}
    >
      <Stack direction="row">
        <Image alt="social network logo" height={6} src={icon} width={6} />
        <Text color={labelColor}>{item.title}</Text>
      </Stack>
      <Text color={strongColor} fontSize="4xl">
        {item.followers}
      </Text>
      <Text color={labelColor} textTransform="uppercase">
        {item.label}
      </Text>

      <Trend trendUp={item.trendUp} trendlabel={item.trendlabel} />
    </Stack>
  );
};

const App: React.FC = () => {
  const topBgColor = useColorModeValue("lightMode.100", "darkMode.700");
  const bottomBgColor = useColorModeValue("white", "darkMode.700");
  const strongColor = useColorModeValue("lightMode.900", "darkMode.700");
  const labelColor = useColorModeValue("lightMode.900", "darkMode.900");

  return (
    <>
      <Stack backgroundColor={bottomBgColor} height="100vh" position="absolute" width="100%">
        <Stack backgroundColor={topBgColor} borderBottomRadius="xl" height="30vh" width="100%" />
      </Stack>
      <Stack
        /* backgroundColor="white" */
        /* backgroundImage={["url('/assets/pattern-curve.svg'), url('/assets/pattern-bg.svg')"]} */
        backgroundPosition={["50%  100%, 50% 0%", "0%  100%, 80% 50%"]}
        backgroundRepeat={["no-repeat, no-repeat", "no-repeat, no-repeat"]}
        backgroundSize={["contain, 90%", "50% , 46%"]}
        height="100vh"
        justifyContent="center"
        paddingX={[0, 40]}
        position="absolute"
        role="main"
        width="100%"
      >
        <Stack direction="row">
          <Stack spacing={0}>
            <Text as="h1" color={strongColor} fontSize="2xl" fontWeight="700">
              Social Media Dashboard
            </Text>
            <Text color={labelColor} fontSize="sm" fontWeight="700">
              Total Followers: 23,004
            </Text>
          </Stack>
          <Stack direction="row" />
        </Stack>
        <Stack direction="row">
          <CardTemplate item="facebook" />
          <CardTemplate item="twitter" />
          <CardTemplate item="instagram" />
          <CardTemplate item="youtube" />
        </Stack>
        <Text as="h3" color={strongColor} fontSize="2xl" fontWeight="700">
          Overview - Today
        </Text>
      </Stack>
    </>
  );
};

export default App;
