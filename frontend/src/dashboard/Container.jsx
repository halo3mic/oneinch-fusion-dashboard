import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-5 bg-[#1D2B41] opacity-90 rounded-md">
      {children}
    </div>
  );
}

export default Container;