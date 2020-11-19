import React from 'react'
//Import components that you create here
import Explanation from './Explanation/Explanation'
import Features from './Features/Features'

function LandingPage() {
    return (
        //Use components that you import here
        <div class="container">
            <Explanation />
            <Features/>
        </div>
    )
}

export default LandingPage;