import { extendTheme } from "@chakra-ui/react"; // ✅ Correct import

const theme = extendTheme({
  colors: {
    brand: {
      100: "#E3F8FF",
      500: "#0077B6",
      900: "#023E8A",
    },
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
});

export default theme; // ✅ Export your custom theme
