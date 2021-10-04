import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = (props) => {
  // some common object peacking
  const { img, key, desc, discount, price, title } = props.service;

  return (
    <div className="mt-5 ">
      <div className="container">
        {/* courses summary  */}
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>
                <h4>{title}</h4>
              </Card.Title>
              <Card.Text>{desc}</Card.Text>
              <h4>price: ${price}</h4>
              <h4>discount price: ${discount}</h4>
              <button className="btn btn-success">Buy Now</button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Service;
