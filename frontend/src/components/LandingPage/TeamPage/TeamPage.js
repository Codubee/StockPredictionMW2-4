import React from 'react';
import TeamCard from './TeamCard';
import { Container, Row, Col } from 'reactstrap';


function TeamPage() {
    return(
  <>
  <h1 className = "heading">Meet Our Team!</h1> <br />
  <Container className = "container-width">
  <Row> 
  <Col lg = "4" md = "4" sm = "12" xs = "12">
      <TeamCard headshot = "/MiguelZavala.jpg" altText = "Miguel Zavala Headshot" name = "Miguel Zavala"
      line1 = "Latino Founder of Codubee" line2 = "Software Engineer" line3 = "Cloud Engineer"
      github = "https://github.com/Codubee" /> 
  </Col>
  <Col  lg = "4" md = "4" sm = "12" xs = "12">  
      <TeamCard headshot = "/DylanHua.jpg" altText = "Dylan Hua Headshot" name = "Dylan Hua"
      line1 = "Computer Science" line2 = "UT Dallas" line3 = "Class of 2021" 
      github = "https://github.com/DHua5922" />
  </Col> 
  <Col  lg = "4" md = "4" sm = "12" xs = "12">
      <TeamCard headshot = "/SunnyGuan.jpg" altText = "Sunny Guan Headshot" name = "Sunny Guan"
      line1 = "Computer Science" line2 = "UT Dallas" line3 = "Class of 2023"
      github = "https://github.com/sunnyguan"/>
  </Col>
  </Row>

  <Row> 
  <Col  lg = "4" md = "4" sm = "12" xs = "12">
      <TeamCard headshot = "/MaahaSakhia.png" altText = "Maaha Sakhia Headshot" name = "Maaha Sakhia"
      line1 = "Electrical Engineering" line2 = "UT Dallas" line3 = "Class of 2022"
      github = "https://github.com/maahasakhia" />
  </Col>
  <Col  lg = "4" md = "4" sm = "12" xs = "12">
      <TeamCard headshot = "/NickSangha.png" altText = "Nick Sangha Headshot" name = "Nick Sangha"
      line1 = "Computer Science" line2 = "UT Dallas" line3 = "Class of 2022"
      github = "https://github.com/Nirvair-Sangha" />
  </Col>
  <Col  lg = "4" md = "4" sm = "12" xs = "12">
      <TeamCard headshot = "/VenkataChikkam.jpg" altText = "Venkata Chikkam Headshot" name = "Venkata Chikkam"
      line1 = "Computer Science" line2 = "UT Dallas" line3 = "Class of 2021"
      github = "https://github.com/vpc2513"/>
  </Col>
  </Row>
  </Container>
  </>
    );
};

export default TeamPage;