import Footer from "@/components/footer/Footer";
import { Box } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Box sx={{ padding: { xs: "1% 4%", md: "1% 15%" } }}>
          <Main />
        </Box>
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
