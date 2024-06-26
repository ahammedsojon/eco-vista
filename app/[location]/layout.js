import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  aqi,
  temperature,
  wind,
  weather,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <Image
            src="/background.png"
            className="bg-img"
            height={1200}
            width={700}
            alt="bg-img"
          />
          <div className="overlay"></div>
          <main className="!z-50 w-full">
            <div className="container">
              <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
                {children}
                {weather}
                {aqi}
                {wind}
                {temperature}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
