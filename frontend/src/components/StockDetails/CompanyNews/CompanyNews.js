import React, { Component } from "react";
import { 
    Card, CardBody, CardImg, 
    CardTitle, CardSubtitle, CardText,
    Row, Col, Container
} from "reactstrap";
import { toDate, format } from 'date-fns'
import "./CompanyNews.css";
import { getCompanyNews } from "../../../service/CompanyNews/CompanyNews";

/**
 * Shows company news.
 * 
 * @return {JSX.Element} Company news.
 */
export default class CompanyNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyNews: []
        };
    }

    componentDidMount() {
        // Load company news
        getCompanyNews("AAPL")
            .then(success => this.setState({ companyNews: success.data }))
            .catch(error => console.log(error.response));
    }

    render() {
        return (
            <Container id="company-news">
                <Row>
                    {
                        this.state.companyNews.map((news, index) => {
                            const { 
                                image, headline, category, 
                                summary, url, source, datetime 
                            } = news;

                            return (
                                <>
                                    { // Show 10 news
                                        index < 10 &&  
                                            <Col key={index} sm="12" md="6" lg="4" className="col">
                                                <a href={url} target="_blank">
                                                    <Card className="card">
                                                        <CardImg src={image} />
                                                        <CardBody className="body">
                                                            <CardTitle className="title" tag="h5">
                                                                {headline}
                                                            </CardTitle>
                                                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                                                <br />
                                                                <p>{category} | {source}</p>
                                                                <p>{convertUnixTimeToDate(datetime)}</p>
                                                            </CardSubtitle>
                                                            <CardText className="description">{summary}</CardText>
                                                        </CardBody>
                                                    </Card>
                                                </a>
                                            </Col>
                                    }
                                </>
                            );
                        })
                    }
                </Row>
            </Container>
        );
    }
}

/**
 * Converts unix time to date.
 * 
 * @param {number} unixTime Unix time.
 * @return {string} Date in format: Month Day, Year.
 */
function convertUnixTimeToDate(unixTime) {
    const date = toDate(unixTime);
    return format(date, "MMMM dd, yyyy");
}