import React from "react";
import { stockData } from "../../global";
import { 
    Card, CardBody, CardTitle,
    Row, Col,
 } from "reactstrap";
import CardText from "reactstrap/lib/CardText";
import { format, fromUnixTime } from 'date-fns';
import "./StockQuote.css";

/**
 * Shows list of stock quotes.
 * 
 * @return {JSX.Element} List of stock quotes.
 */
export default function StockQuote() {
    return (
        <div id="stock-quotes">
            {
                stockData.map((quote, index) => {
                    const { t, c, ...props } = quote;
                    return (
                        <Card key={index} className="quote">
                            <CardBody>
                                <CardTitle className="header">
                                    <div className="company">Sabre</div>
                                    <div>{convertUnixTimeToDate(t)}</div>
                                </CardTitle>
                                <CardText className="text-center">
                                    <p className="price">${c}</p>
                                    <Row>
                                        {
                                            Object.entries(props).map(([key, value]) => (
                                                <Col key={key}>
                                                    <u>{key}</u>
                                                    <div>${value}</div>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </CardText>
                            </CardBody>
                        </Card>
                    );
                })
            }     
        </div>   
    );
}

/**
 * Converts the unix timestamp to date format: Month Day, Year.
 * 
 * @param {number} unixTime Unix timestamp.
 * @return {string} Date format: Month Day, Year
 */
function convertUnixTimeToDate(unixTime) {
    let date = fromUnixTime(unixTime);
    return format(date, "MMM dd, yyyy");
}