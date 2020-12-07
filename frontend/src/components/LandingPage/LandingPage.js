import React from 'react'
//Import components that you create here
import './LandingPage.css';
import TeamPage from './TeamPage/TeamPage';
import Explanation from './Explanation/Explanation'

function LandingPage() {
    return (
        //Use components that you import here
        <>
            <TeamPage />
            <Explanation />
        </>
    )
}

export default LandingPage;