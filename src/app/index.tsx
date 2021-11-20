import React, {ComponentRef, useEffect} from "react";
import {Grid, Image, Stack, Text, useColorModeValue} from "@chakra-ui/react";

const cardInfo = [
  {
    key: "facebook",
    color: "500",
    colorType: "solid",
    icon: "icon-facebook.svg",
    title: "@nathanf",
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
    title: "@nathanf",
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
    title: "@realnathanf",
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
    title: "Nathan F.",
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
const detailInfo = [
  {
    id: 0,
    key: "facebook",
    icon: "icon-facebook.svg",
    title: "Page Views",
    value: "87",
    trendUp: true,
    trendlabel: "3%",
  },
  {
    id: 1,
    key: "facebook",
    icon: "icon-facebook.svg",
    title: "Likes",
    value: "52",
    trendUp: false,
    trendlabel: "2%",
  },
  {
    id: 2,
    key: "instagram",
    icon: "icon-instagram.svg",
    title: "Likes",
    value: "5462",
    trendUp: true,
    trendlabel: "2257%",
  },
  {
    id: 3,
    key: "instagram",
    icon: "icon-instagram.svg",
    title: "Profile Views ",
    value: "52k",
    trendUp: true,
    trendlabel: "1375%",
  },
  {
    id: 4,
    key: "twitter",
    icon: "icon-twitter.svg",
    title: "Retweets",
    value: "117",
    trendUp: true,
    trendlabel: "303%",
  },
  {
    id: 5,
    key: "twitter",
    icon: "icon-twitter.svg",
    title: "Likes",
    value: "507",
    trendUp: true,
    trendlabel: "553%",
  },
  {
    id: 6,
    key: "youtube",
    icon: "icon-youtube.svg",
    title: "Likes",
    value: "107",
    trendUp: false,
    trendlabel: "19%",
  },
  {
    id: 7,
    key: "youtube",
    icon: "icon-youtube.svg",
    title: "Total Views",
    value: "1407",
    trendUp: false,
    trendlabel: "12%",
  },
];
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
const DetailTemplate = (props: any) => {
  //const sliderImage = `/assets/${props.image}`;

  const cardColor = useColorModeValue("var(--chakra-colors-lightMode-300)", "darkMode.700");

  const strongColor = useColorModeValue("lightMode.900", "darkMode.700");
  const labelColor = useColorModeValue("lightMode.900", "darkMode.900");
  const icon = `/assets/${props.icon}`;

  return (
    <Stack
      background={cardColor}
      borderRadius={5}
      color="primary.500"
      height={36}
      justifyContent="space-between"
      padding={4}
    >
      <Stack alignItems="center" direction="row" justifyContent="space-between" width="100%">
        <Text color={labelColor}>{props.title}</Text>
        <Image alt="social network logo" height={6} src={icon} width={6} />
      </Stack>
      <Stack alignItems="center" direction="row" justifyContent="space-between" width="100%">
        <Text color={strongColor} fontSize="4xl">
          {props.value}
        </Text>
        <Trend trendUp={props.trendUp} trendlabel={props.trendlabel} />
      </Stack>
    </Stack>
  );
};
const App: React.FC = () => {
  const topBgColor = useColorModeValue("lightMode.100", "darkMode.700");
  const bottomBgColor = useColorModeValue("white", "darkMode.700");
  const strongColor = useColorModeValue("lightMode.900", "darkMode.700");
  const labelColor = useColorModeValue("lightMode.900", "darkMode.900");
  const detailCards = detailInfo.map((de) => {
    return <DetailTemplate {...de} key={de.id} />;
  });

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
        <Grid gap={6} templateColumns="repeat(4, 1fr)">
          <CardTemplate item="facebook" />
          <CardTemplate item="twitter" />
          <CardTemplate item="instagram" />
          <CardTemplate item="youtube" />
        </Grid>
        <Text as="h3" color={strongColor} fontSize="2xl" fontWeight="700">
          Overview - Today
        </Text>
        <Grid gap={6} templateColumns="repeat(4, 1fr)">
          {detailCards}
        </Grid>
      </Stack>
      <Stack />
    </>
  );
};

export default App;
