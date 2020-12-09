import React from 'react'
import News from './News/News'
import Price from './Price/Price'

function StockDetails(props) {

    const companyName = props.match.params.companyName
    return (
        <div class="container text-center">
            <News companyName={companyName} />
            <Price companyName={companyName} />
        </div>

    )

}

export default StockDetails;