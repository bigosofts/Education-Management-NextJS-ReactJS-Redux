import "./globals.css";
import "../assets/css/font-awesome.min.css";
import "animate.css";

import { Providers } from "./redux/provider";
import { GoogleTagManagerBeforeBody } from "@/helper/googleTagBeforeBody";
import { GoogleTagManagerBeforeBodyTwo } from "@/helper/googleTagBeforeBodyTwo";
import { GoogleTagManagerBeforeHeader } from "@/helper/googleTagBeforeHeader";
import { GoogleTagManagerBeforeHeaderTwo } from "@/helper/googleTagBeforeHeaderTwo";
import { MetaPixelSetup } from "@/helper/metaPixelBeforeHead";
import { OneSignalPush } from "@/helper/oneSignalPushNotification";

export const metadata = {
  title: "Internet Madrasa",
  description: "A complete koumi madrasa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <GoogleTagManagerBeforeHeader /> */}
        <GoogleTagManagerBeforeHeaderTwo />
        {/* <GoogleTagManagerBeforeBody /> */}
        <GoogleTagManagerBeforeBodyTwo />
        <OneSignalPush />

        {/* <MetaPixelSetup /> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
