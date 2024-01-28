import type { Metadata } from "next";
import { Inter, Roboto, Open_Sans } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import "./globals.css";

const roboto = Open_Sans({
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desa Erelembang | Situs Desa Erelembang",
  description: "Selamat datang di Desa Erelembang!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
