import "./globals.css";
import "../assets/css/font-awesome.min.css";
import "animate.css";

import { Providers } from "./redux/provider";
import { GoogleTagManagerBeforeBody } from "@/helper/googleTagBeforeBody";
import { GoogleTagManagerBeforeHeader } from "@/helper/googleTagBeforeHeader";

export const metadata = {
  title: "Internet Madrasa",
  description: "A complete koumi madrasa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <GoogleTagManagerBeforeHeader/> */}

      <body>
        {/* <GoogleTagManagerBeforeBody /> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
