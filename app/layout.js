import "./globals.css";
import "../assets/css/font-awesome.min.css";
import "animate.css";

import { Providers } from "./redux/provider";

import { GoogleTagManagerBeforeBodyTwo } from "@/helper/googleTagBeforeBodyTwo";

import { GoogleTagManagerBeforeHeaderTwo } from "@/helper/googleTagBeforeHeaderTwo";
import { MetaPixelSetup } from "@/helper/metaPixelBeforeHead";
import { OneSignalPush } from "@/helper/oneSignalPushNotification";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LoaderElement from "@/components/LoaderElement/LoaderElement";

export const metadata = {
  title: "Internet Madrasa - একটি পূর্নাঙ্গ অনলাইন কওমী মাদরাসা",
  description:
    "বিশ্বের একমাত্র ও সর্ববৃহৎ পূর্ণাঙ্গ অনলাইন কওমী মাদরাসা যেখানে থেকে শিক্ষার্থীরা সরাসরি কওমী বেফাক বোর্ড থেকে পরীক্ষা দিচ্ছে। এখান থেকে পরীক্ষা দিয়ে পর্যায়ক্রমে মুতাওয়াসসিতাহ, সানাবিয়াতুল উলইয়া, ফজিলত ও তাকমিল (দাওরায়ে হাদীস) পাশ করে কৃতিত্বের সাথে ফারেগ হয়েছেন আলহামদুলিল্লাহ। অতএব অনলাইন থেকে পড়েও যে আলেম/আলেমা হওয়া যায় তার একটি উত্তম দৃষ্টান্ত স্থাপিত হয়েছে",
  metadataBase: new URL("https://www.internetmadrasa.com"),
  openGraph: {
    images: "/logo_internet_madrasa.png",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManagerBeforeHeaderTwo />

        <GoogleTagManagerBeforeBodyTwo />
        <OneSignalPush />

        {/* <MetaPixelSetup /> */}
        <Providers>
          <LoaderElement />
          {children}
        </Providers>
      </body>
    </html>
  );
}
