import React from 'react'
import StockQuote from './StockQuote/StockQuote'
import CompanyNews from './CompanyNews/CompanyNews'

function StockDetails(props) {

    const companyName = props.match.params.companyName
    return (
        <div className="container text-center">
            <StockQuote companyName={companyName} />
            <CompanyNews companyName={companyName} />
        </div>

    )

}

export default StockDetails;