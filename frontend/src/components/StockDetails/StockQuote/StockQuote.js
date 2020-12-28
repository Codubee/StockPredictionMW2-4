import React from "react";
import { stockData } from "../../../global";
import {
    Card, CardBody, CardTitle,
    Row, Col,
} from "reactstrap";
import { format, fromUnixTime } from 'date-fns';
import "./StockQuote.css";

/**
 * Shows list of stock quotes.
 * 
 * @return {JSX.Element} List of stock quotes.
 */
class StockQuote extends React.Component {

    constructor(props){
        super(props)
        this.state = {companyName:props.companyName}
    }

    componentDidMount(){
        //this is where we will call the stock quote api
    }

    /**
     * Converts the unix timestamp to date format: Month Day, Year.
     * 
     * @param {number} unixTime Unix timestamp.
     * @return {string} Date format: Month Day, Year
     */
    convertUnixTimeToDate(unixTime) {
        let date = fromUnixTime(unixTime);
        return format(date, "MMM dd, yyyy");
    }
    render() {
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
                                        <div>{this.convertUnixTimeToDate(t)}</div>
                                    </CardTitle>
                                    <p className="price">${c}</p>
                                    <Row>
                                        {
                                            Object.entries(props).map(([key, value]) => (
                                                <Col key={key}>
                                                    <div className="font-weight-bold">
                                                        <u>{key}</u>
                                                    </div>
                                                    <div>${value}</div>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </CardBody>
                            </Card>
                        );
                    })
                }
            </div>
        );
    }
}

export default StockQuote;