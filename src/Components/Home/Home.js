import React from "react";
import { Link } from "react-router-dom";
import Course from "../Course/Course";
import Header from "../Header/Header";
import HomeCouses from "../HomeCouses/HomeCouses";

import IntroSection from "../IntroSection/IntroSection";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <div className="container">
        {/* component call  */}
        <IntroSection />
        {/* top sectices start */}
        <h1
          style={{
            textTransform: "uppercase",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          our <span>top</span> services
        </h1>
        {/* some demo course  */}

        <HomeCouses />

        {/* some demo course end  */}
        <div>
          <Link to="/services" className="btn btn-success w-25 mb-5">
            show all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
