import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Home from "../Home/Home";
import HomeCouses from "../HomeCouses/HomeCouses";
import IntroSection from "../IntroSection/IntroSection";
import Service from "../Service/Service";

const ServisesAPI = () => {
  const [servises, setServises] = useState([]);
  // load from API
  useEffect(() => {
    fetch("Services.JSON")
      .then((res) => res.json())
      .then((data) => setServises(data));
  }, []);

  return (
    <div className="mt-5">
      {/* component call  */}
      <IntroSection />
      <h2>
        Our <span>most poppular</span> services
      </h2>
      {/* map our array ad show the card */}
      <Row xs={1} md={2} className="g-4">
        {servises.map((service) => (
          <div>
            {/* component call */}
            <Service key={service.id} service={service}></Service>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default ServisesAPI;
