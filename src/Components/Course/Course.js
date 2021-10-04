import React from "react";
import { Card, Col } from "react-bootstrap";

const Course = (props) => {
  const { title, img, desc, price } = props.course;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <h4>{title}</h4>
            </Card.Title>
            <Card.Text>{desc.slice(0, 200)}</Card.Text>
            <h4>price: {price}</h4>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Course;
