import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Teacher.css";
const Teacher = (props) => {
  console.log(props.teacher);
  // common object property peacking
  const { name, key, img, joined, language, job } = props.teacher;
  return (
    <div className="container mt-5">
      <Col>
        <Card className="teacher-card">
          <div>
            {/* image added  */}
            <Card.Img className="teacher-img" variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Title>
              <div className="intro">
                <strong>
                  {/* name addeed  */}
                  <h4> {name} </h4>
                </strong>
                {/* some socal incon */}
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </Card.Title>
            <Card.Text></Card.Text>
            {/* joined summary  */}
            <p>
              joined : <strong>{joined}</strong>
            </p>
            {/* language use  */}
            <h5>language/framework : {language}</h5>
            {/* teachers stutas  */}
            <p>status : {job}</p>
            {/* button for read more  */}
            <button className="btn btn-success">show more</button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Teacher;
