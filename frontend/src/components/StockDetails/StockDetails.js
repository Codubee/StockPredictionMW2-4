import React from 'react'
import News from './News/News'
import Price from './Price/Price'

function StockDetails() {

    return (
        <div class="container text-center">
            <h3>ID: {this.props.match.params.companyName}</h3>
            <News companyName={this.state.companyName} />
            <Price companyName={this.state.companyName} />
        </div>

    )

}