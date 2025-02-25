import { Brawler, Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const brawler = Brawler({
    subsets:["latin"],
    weight:["400", '700']
})

export {brawler, geistSans}