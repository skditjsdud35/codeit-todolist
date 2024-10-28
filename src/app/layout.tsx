import type { Metadata } from "next";
import "./globals.css";
import Providers from "../hooks/common/useProviders";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "코드잇 Todo List",
  description: "코드잇 Todo List",
  icons: {
    icon: "/images/icon/favicon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}