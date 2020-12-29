import React from "react";
import {
    Card, CardBody, CardTitle,
    Row, Col,
} from "reactstrap";
import { format, fromUnixTime } from 'date-fns';
import "./StockQuote.css";
import { getStockQuote } from "../../../service/StockQuote/StockQuote";
import { STOCK_MAP } from "../../../global";

/**
 * Shows list of stock quotes.
 * 
 * @return {JSX.Element} List of stock quotes.
 */
class StockQuote extends React.Component {

    constructor(props) {
        super(props)
        this.state = { stockQuote: {} }
    }

    componentDidMount() {
        getStockQuote(this.props.companyName)
            .then(res => {
                this.setState({ stockQuote: res.data })
            })
            .catch(err => console.log(err.response));
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
        const { c, ...props } = this.state.stockQuote;
        const t = new Date().getTime() / 1000;
        return (
            <div id="stock-quotes">
                <Card className="quote">
                    <CardBody>
                        <CardTitle className="header">
                            <div className="company">{this.props.companyName}</div>
                            <div>{this.convertUnixTimeToDate(t)}</div>
                        </CardTitle>
                        <p className="price">${c}</p>
                        <Row>
                            {
                                Object.entries(props).map(([key, value]) => (
                                    <Col key={key}>
                                        <div className="font-weight-bold">
                                            <u>{STOCK_MAP[key]}</u>
                                        </div>
                                        <div>${value}</div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default StockQuote;