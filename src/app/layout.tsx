import React from "react";
import LayoutRecoil from "./layout.recoil";

export const metadata = {
  title: "myfair front pre-course",
  description: "todolist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#f6f6f6",
        }}
      >
        <LayoutRecoil>{children}</LayoutRecoil>
      </body>
    </html>
  );
}
