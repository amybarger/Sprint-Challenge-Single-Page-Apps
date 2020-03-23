import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const CharacterCard = (props) => {
  return (
    <div className="card">
      <br></br>
      <br></br>
      <br></br>
      <Card style={{width: '50%'}}>
        <CardImg top width="50%" src={props.image} alt="Rick and Morty Character" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.id}</CardText>
          <CardText>{props.species}</CardText>
          <CardText>{props.location}</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default CharacterCard;
