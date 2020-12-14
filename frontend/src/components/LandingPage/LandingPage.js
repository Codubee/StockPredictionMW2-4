import React from 'react'
//Import components that you create here
import Explanation from './Explanation/Explanation'
import Features from './Features/Features'
import Tools from './Tools/Tools'

function LandingPage() {
    return (
        //Use components that you import here
        <div class="container">
            <Explanation />
            <Features/>
            <Tools />
        </div>
    )
}

export default LandingPage;