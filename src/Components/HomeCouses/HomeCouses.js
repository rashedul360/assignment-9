import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Course from "../Course/Course";

const HomeCouses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("Services.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {courses.map((course) => (
          <Course course={course}></Course>
        ))}
      </Row>
    </div>
  );
};

export default HomeCouses;
