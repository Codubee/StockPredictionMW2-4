import React from "react";
import {
    Card, CardBody, CardImg,
    CardTitle, CardSubtitle, CardText,
    Row, Col, Container
} from "reactstrap";
import { companyNews } from "../../../global";
import { toDate, format } from 'date-fns'
import "./CompanyNews.css";
import Prediction from '../Prediction/Prediction'

/**
 * Shows company news.
 * 
 * @return {JSX.Element} Company news.
 */
class CompanyNews extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            companyName: props.companyName
        }
    }

    componentDidMount(){
        //this is where we will call the company news api
    }

    /**
     * Converts unix time to date.
     * 
     * @param {number} unixTime Unix time.
     * @return {string} Date in format: Month Day, Year.
     */
    convertUnixTimeToDate(unixTime) {
        const date = toDate(unixTime);
        return format(date, "MMMM dd, yyyy");
    }

    render() {
        return (
            <Container id="company-news">
                <Prediction news={this.state.news}/> 
                <Row>
                    {
                        companyNews.map((news, index) => {
                            const {
                                image, headline, category,
                                summary, url, source, datetime
                            } = news;

                            return (
                                <Col key={index} sm="12" md="6" lg="4">
                                    <a href={url} target="_blank"rel="noreferrer">
                                        <Card className="card">
                                            <CardImg src={image} />
                                            <CardBody className="body">
                                                <CardTitle className="title" tag="h5">
                                                    {headline}
                                                </CardTitle>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">
                                                    <br />
                                                    <p>{category} | {source}</p>
                                                    <p>{this.convertUnixTimeToDate(datetime)}</p>
                                                </CardSubtitle>
                                                <CardText className="description">{summary}</CardText>
                                            </CardBody>
                                        </Card>
                                    </a>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default CompanyNews;