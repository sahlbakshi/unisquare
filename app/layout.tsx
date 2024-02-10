import type { Metadata } from "next";
import './globals.css'
import Navbar from "@/components/navigation";
import Provider from "@/components/provider";

export const metadata: Metadata = {
  title: "Unisquare",
  description: "student platfrom",
};

export default async function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar></Navbar>
          <div className="flex flex-col justify-center items-center mt-14">
            <div className="w-4/6 flex flex-col justify-center items-center">
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
