import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Teacher from "../Teacher/Teacher";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("Teachers.JSON")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div>
      <div className="mt-5 mb-5">
        {/* intro part for teachers  */}
        <h1>
          our techers <span> whos are teaching</span>
        </h1>
      </div>
      {/* map api array and show the grid system on the UI */}
      <Row xs={1} md={4} className="g-4">
        {teachers.map((teacher) => (
          <Teacher key={teacher.key} teacher={teacher}></Teacher>
        ))}
      </Row>
    </div>
  );
};

export default Teachers;
