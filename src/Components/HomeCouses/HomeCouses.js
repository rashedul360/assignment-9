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

  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {courses.slice(0, 4).map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </Row>
    </div>
  );
};

export default HomeCouses;
