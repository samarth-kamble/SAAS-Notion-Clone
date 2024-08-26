import React from "react";
interface HomePageLayoutProps {
  children: React.ReactNode;
}
const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return <main>{children}</main>;
};

export default HomePageLayout;
