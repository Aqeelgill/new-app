import React from "react";
import HeaderSection from "./HeaderSection";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderSection
        title="Welcome to My Website" 
        subtitle="Enjoy your experience!"
      />
      {children} {/* This will render pages dynamically */}
    </>
  );
};

export default Layout;
