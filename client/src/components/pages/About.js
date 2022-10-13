import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Tris Wilbraham</Card.Title>
          <Card.Text>
            Hello, my name is Tris and I am a junior web developer. I enjoy all things nerdy such as Dungeons and Dragons
            as well things relating to Video Games. I lean more towards the back-end of development, enjoying creating database stuctures
            as well as assigning relations between tables.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Github</Card.Link>
          <Card.Link href="#">LinkedIn</Card.Link>
          <Card.Link href="#">Email</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
