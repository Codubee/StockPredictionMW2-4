import React from 'react'
import { Row, Col, CardText, CardHeader,Card } from 'reactstrap';
import { featuresArray }  from '../../../global';

function Features() {
    return (
    <div className = "text-center">
        <h1 >Features</h1>
        <h6 >These are the main features of our application</h6>
        <br></br>
        <br></br>
        <Row >
            {
                featuresArray.map((curr,index) => (
                    <Col md="3" key={index}>
                        <CardHeader tag="h5">{curr.feature}</CardHeader>
                        <Card body>
                            <CardText>{curr.desc}</CardText>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </div>

    )
}

export default Features;