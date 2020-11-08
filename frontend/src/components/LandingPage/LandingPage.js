import React from 'react'
//Import components that you create here
import TeamCard from '../LandingPage/TeamComponent/TeamComponent';
import { Container, Row, Col } from 'reactstrap';

function LandingPage(){
    return(
        //Use components that you import here
        <>
        
        <h1 style = {{textAlign: "center", marginTop: "20px"}}>Meet Our Team!</h1>
        <Container fluid="md">
        <Row xs = "3" style = {{marginBottom: "20px", alignContent:"center"}}> 
            <TeamCard headshot = "/MiguelZavala.jpg" altText = "Miguel Zavala Headshot" name = "Miguel Zavala"
            line1 = "Latino Founder of Codubee" line2 = "Software Engineer" line3 = "Cloud Engineer"
            github = "https://github.com/Codubee" />
            <TeamCard headshot = "/DylanHua.jpg" altText = "Dylan Hua Headshot" name = "Dylan Hua"
            line1 = "Computer Science" line2 = "UT Dallas" line3 = "Class of 2021" 
            github = "https://github.com/DHua5922" />
            <TeamCard headshot = "/SunnyGuan.jpg" altText = "Sunny Guan Headshot" name = "Sunny Guan"
            line1 = "Computer Science" line2 = "UT Dallas" line3 = "Class of 2023"
            github = "https://github.com/sunnyguan"/>
        </Row>

        <Row xs = "3" style = {{ marginBottom: "20px"}}> 
            <TeamCard headshot = "/MaahaSakhia.png" altText = "Maaha Sakhia Headshot" name = "Maaha Sakhia"
            line1 = "Electrical Engineering" line2 = "UT Dallas" line3 = "Class of 2022"
            github = "https://github.com/maahasakhia" />
            <TeamCard headshot = "/NickSangha.png" altText = "Nick Sangha Headshot" name = "Nick Sangha"
            line1 = "Computer Science" line2 = "UT Dallas" line3 = "Class of 2022"
            github = "https://github.com/Nirvair-Sangha" />
            <TeamCard headshot = "/githubLogo.png" altText = "Venkata Chikkam Headshot" name = "Venkata Chikkam"
            line1 = "Computer Science" line2 = "UT Dallas" line3 = "Class of 2021"
            github = "https://github.com/vpc2513"/>
        </Row>
        </Container>
        </>

       
    )
}

export default LandingPage;