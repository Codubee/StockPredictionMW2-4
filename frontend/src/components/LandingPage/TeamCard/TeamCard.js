import React from 'react';
import {
  Card, /*CardImg, CardText,*/ CardBody,
  CardTitle, CardSubtitle, /*Button*/
} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import './TeamCard.css'

const TeamCard = (props) => {
  console.log(props.headshot)
  return (
    <span>
    <Card>
        <br />
        <Image className = "headshot" src = {props.headshot} alt = {props.name}  roundedCircle/>
        <CardBody className="text-center">
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.line1}<br />{props.line2}<br />{props.line3}<br /></CardSubtitle>
          {/*<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*/}
           <br /><a target = "_blank" rel="noreferrer" href = {props.github}><img height = "40px" src = "/githubLogo.png"/></a>
        </CardBody>
      </Card>
      <br />
    </span>






  );
};

export default TeamCard;