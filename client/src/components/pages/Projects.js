import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup";
import "react-bootstrap";

export default function Projects() {
  return (
    <div style={{ display: "flex" }}>
      <Card style={{ width: "25rem", margin: "20px" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Tour Tinder</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Github Link</Card.Link>
          <Card.Link href="#">Deployed Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem", margin: "20px" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Dungeons and Dragons Character Generator</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Github Link</Card.Link>
          <Card.Link href="#">Deployed Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem", margin: "20px" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Travel Mate</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://github.com/ahuber25/travel-mate">
            Github Link
          </Card.Link>
          <Card.Link href="http://travel-mategr1.herokuapp.com/">
            Deployed Link
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
