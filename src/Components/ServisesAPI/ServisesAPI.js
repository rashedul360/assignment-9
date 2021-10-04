import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import IntroSection from "../IntroSection/IntroSection";
import Service from "../Service/Service";

const ServisesAPI = () => {
  const [servises, setServises] = useState([]);
  useEffect(() => {
    fetch("Services.JSON")
      .then((res) => res.json())
      .then((data) => setServises(data));
  }, []);

  return (
    <div className="mt-5">
      <IntroSection />
      <h2>
        Our <span>most poppular</span> services
      </h2>
      <Row xs={1} md={2} className="g-4">
        {servises.map((service) => (
          <div>
            <Service key={service.id} service={service}></Service>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default ServisesAPI;
