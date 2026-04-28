import React from "react";

const Section = ({ children, className = "", style = {}, ...props }) => {
  return (
    <section
      {...props}
      style={style}
      className={`${className}`}
    >
      {children}
    </section>
  );
};

export default Section;