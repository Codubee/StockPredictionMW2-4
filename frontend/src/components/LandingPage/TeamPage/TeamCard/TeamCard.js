import React from 'react';
import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';
import './TeamCard.css'

function TeamCard (props) {
  return (
    <span>
    <Card>
        <br />
        <CardImg className = "headshot" src = {props.headshot} alt = {props.name}  roundedCircle/>
        <CardBody className="text-center">
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.line1}<br />{props.line2}<br />{props.line3}</CardSubtitle>
           <hr /><a target = "_blank" rel="noreferrer" href = {props.github}><img alt="Github logo" height = "40px" src = "/githubLogo.png"/></a>
        </CardBody>
      </Card>
      <br />
    </span>
  );
};

export default TeamCard;