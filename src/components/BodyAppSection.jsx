import React from "react";
import sectionJSON from "./json/bodySectionsData.json";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const BodyAppSection = ({ dataSection }) => {
  return (
    <>
      <Card className="mb-5 w-75">
        {sectionJSON.map(sec => sec.section === dataSection ? <Card.Img key={sec.img} className='img' src={sec.img} alt={sec.concept} /> : "")}
        <Card.Body>
          <Card.Subtitle>
            {sectionJSON.map(sec => sec.section === dataSection ? sec.concept : "")}
          </Card.Subtitle>
          <Card.Title className="d-flex text-center">
            {sectionJSON.map(sec => sec.section === dataSection ? sec.title : "")}
          </Card.Title>
          <Card.Text>
            {sectionJSON.map(sec => sec.section === dataSection ? sec.slogan : "")}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            {sectionJSON.map(sec => sec.section === dataSection ? sec.details[0].map((detail, index) => <li key={index}>{detail}</li>) : "")}
          </ListGroup.Item>
          <ListGroup.Item>
            {sectionJSON.map(sec => sec.section === dataSection ? sec.details[1].map((detail, index) => <li key={index}>{detail}</li>) : "")}
          </ListGroup.Item>
        </ListGroup>
        {/* <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body> */}
      </Card>
    </>
  )
}

export default BodyAppSection;