import Header from "@/components/Landing Page/Header";
import React from "react";
interface HomePageLayoutProps {
  children: React.ReactNode;
}
const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default HomePageLayout;
