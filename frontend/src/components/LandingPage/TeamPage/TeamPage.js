import React from 'react';
import TeamCard from './TeamCard/TeamCard';
import { Container, Row, Col } from 'reactstrap';

const members = [
    {
        headshot: "/MiguelZavala.jpg",
        altText: "Miguel Zavala Headshot",
        name: "Miguel Zavala",
        line1: "Latino Founder of Codubee",
        line2: "Software Engineer",
        line3: "Cloud Engineer",
        github: "https://github.com/Codubee"

    },
    {
        headshot: "/DylanHua.jpg",
        altText: "Dylan Hua Headshot",
        name: "Dylan Hua",
        line1: "Computer Science",
        line2: "UT Dallas",
        line3: "Class of 2021",
        github: "https://github.com/DHua5922"

    },
    {
        headshot: "/SunnyGuan.jpg",
        altText: "Sunny Guan Headshot",
        name: "Sunny Guan",
        line1: "Computer Science",
        line2: "UT Dallas",
        line3: "Class of 2023",
        github: "https://github.com/sunnyguan"

    },
    {
        headshot: "/MaahaSakhia.png",
        altText: "Maaha Sakhia Headshot",
        name: "Maaha Sakhia",
        line1: "Electrical Engineering",
        line2: "UT Dallas",
        line3: "Class of 2022",
        github: "https://github.com/maahasakhia"
    },
    {
        headshot: "/NickSangha.png",
        altText: "Nick Sangha Headshot",
        name: "Nick Sangha",
        line1: "Computer Science",
        line2: "UT Dallas",
        line3: "Class of 2022",
        github: "https://github.com/Nirvair-Sangha"
    },
];



function TeamPage() {
    return (
        <>
            <h1 className="heading">Meet Our Team!</h1> <br />
            <Container className="container-width">
                <Row>
                    {
                        members.map((member, index) => (
                            <Col key={index} md="4" sm="12">
                                <TeamCard {...member} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default TeamPage;