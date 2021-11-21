import {extendTheme, theme} from "@chakra-ui/react";
import {mode, cssVar} from "@chakra-ui/theme-tools";

const $widthsw = cssVar("switch-track-width");
const $heightsw = cssVar("switch-track-height");

export default extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  colors: {
    branding: {
      300: "hsl(163, 72%, 41%)",
      400: "hsl(356, 69%, 56%)",
      500: "hsl(208, 92%, 53%)",
      600: "hsl(203, 89%, 53%)",
      700: "hsl(348, 97%, 39%)",
    },
    darkMode: {
      300: "hsl(230, 17%, 14%)",
      500: "hsl(232, 19%, 15%)",
      700: "hsl(228, 28%, 20%)",
      800: "#333a56",
      900: "hsl(228, 34%, 66%)",
    },
    lightMode: {
      100: "hsl(225, 100%, 98%)",
      300: "hsl(227, 47%, 96%)",
      400: "#e1e3f0",
      500: "hsl(230, 22%, 74%)",
      700: "hsl(228, 12%, 44%)",
      900: "hsl(230, 17%, 14%)",
    },
    success: theme.colors.whatsapp,
    error: theme.colors.red,
    warning: theme.colors.orange,
  },
  styles: {
    global: (props: any) => ({
      "html, body, #root": {
        color: mode(undefined, "whiteAlpha.900")(props),
        height: "100%",
      },
      /* "*::-webkit-scrollbar": {
        display: "none",
      }, */
    }),
  },
  textStyles: {
    translucid: {
      ".chakra-ui-light &": {
        color: ["blackAlpha.100", "blackAlpha.500"],
      },
      ".chakra-ui-dark &": {
        color: ["whiteAlpha.100", "whiteAlpha.500"],
      },
    },
  },
  fonts: {
    body: "Inter",
    heading: "Inter",
  },
  fontSizes: {
    sm: "0.95rem",
    xs: "0.8rem",
  },
  sizes: {
    container: {
      xl: "1265px",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderLeftRadius: 9999,
        borderRightRadius: 9999,
      },
      sizes: {
        lg: {
          paddingY: 3,
          fontSize: "md",
        },
      },
      variants: {
        solid: (props: any) => ({
          backgroundColor: `${props.colorScheme}.500`,
          color: mode(undefined, "white")(props),
          fontWeight: "bold",
          _hover: {
            backgroundColor: `${props.colorScheme}.600`,
          },
        }),
        outline: (props: any) => ({
          borderColor: `${props.colorScheme}.500`,
          color: `${props.colorScheme}.500`,
          fontWeight: "bold",
          _hover: {
            borderColor: `${props.colorScheme}.600`,
            color: `${props.colorScheme}.600`,
          },
        }),
      },
    },
    Switch: {
      baseStyle: (props: any) => ({
        track: {
          bg: mode("lightMode.500", undefined)(props),
        },
        thumb: {
          bg: mode("lightMode.100", "darkMode.700")(props),
        },
      }),
      sizes: {
        md: {
          container: {
            [$widthsw.variable]: "2.6rem",
            [$heightsw.variable]: "1.3rem",
          },
        },
      },
    },
  },
});
