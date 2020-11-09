import React from 'react';
import {
  Card, /*CardImg, CardText,*/ CardBody,
  CardTitle, CardSubtitle, /*Button*/
} from 'reactstrap';
import Image from 'react-bootstrap/Image';

const TeamCard = (props) => {
  console.log(props.headshot)
  return (
    <span>
    <link href="TeamCard.css" type="text/css" rel="stylesheet" />
    <Card style={{width:"75%"}}>
        <br />
        <Image src = {props.headshot} alt = {props.name} borderRadius= "50%" style = {{ width: "70%", alignContent: "center"}} roundedCircle/>
        <CardBody className="text-center">
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.line1}<br />{props.line2}<br />{props.line3}<br /></CardSubtitle>
          {/*<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*/}
           <a target = "_blank" rel="noreferrer" href = {props.github}><img height = "30px" src = "/githubLogo.png"/></a>
        </CardBody>
      </Card>
    </span>






  );
};

export default TeamCard;