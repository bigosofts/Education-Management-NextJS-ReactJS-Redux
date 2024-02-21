import "./globals.css";
import "../assets/css/font-awesome.min.css";
import "animate.css";

import { Providers } from "./redux/provider";
import { GoogleTagManagerBeforeBody } from "@/helper/googleTagBeforeBody";
import { GoogleTagManagerBeforeHeader } from "@/helper/googleTagBeforeHeader";
import { MetaPixelSetup } from "@/helper/metaPixelBeforeHead";

export const metadata = {
  title: "Internet Madrasa",
  description: "A complete koumi madrasa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManagerBeforeHeader />
        <GoogleTagManagerBeforeBody />
        <MetaPixelSetup />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
