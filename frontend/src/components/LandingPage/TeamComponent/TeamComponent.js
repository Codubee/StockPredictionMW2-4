import React from 'react';
import {
  Card, /*CardImg, CardText,*/ CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Image from 'react-bootstrap/Image';

const TeamCard = (props) => {
  console.log(props.headshot)
  return (
    <span height = "200px">
      <Card style={{width:"70%", height:"100%"}}>
        <Image src = {props.headshot}  width = "80%" borderRadius = "50%" style = {{alignSelf: "center"}} roundedCircle/>
        <hr style = {{width: "80%", alignSelf: "center"}}/>
        <CardBody className="text-center">
          <CardTitle><b>{props.name}</b></CardTitle>
          <CardSubtitle>{props.line1}<br />{props.line2}<br />{props.line3}<br /></CardSubtitle><br />
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
         <a target = "_blank" href = {props.github}><img height = "30px" src = "/githubLogo.png"/></a>
        </CardBody>
      </Card>

    </span>




  );
};

export default TeamCard;