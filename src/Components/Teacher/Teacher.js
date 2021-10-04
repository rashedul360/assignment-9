import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Teacher.css";
const Teacher = (props) => {
  console.log(props.teacher);
  const { name, key, img, joined, language, job } = props.teacher;
  return (
    <div className="container mt-5">
      <Col>
        <Card className="teacher-card">
          <div>
            <Card.Img className="teacher-img" variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Title>
              <div className="intro">
                <strong>
                  <h4> {name} </h4>
                </strong>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </Card.Title>
            <Card.Text></Card.Text>
            <hp>
              joined : <strong>{joined}</strong>
            </hp>
            <h5>language/framework : {language}</h5>
            <p>status : {job}</p>
            <button className="btn btn-success">show more</button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Teacher;
