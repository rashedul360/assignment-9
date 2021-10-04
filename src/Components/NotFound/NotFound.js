import React from "react";
import SVG from "../../images/undraw_page_not_found_su7k.svg";
const NotFound = () => {
  return (
    <div>
      {/* // when the page not found */}
      <img src={SVG} alt="not found" />
      <h2 className="mt-5 mb-5">4O4 Not Found</h2>
    </div>
  );
};

export default NotFound;
