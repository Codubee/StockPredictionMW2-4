import React from 'react'
//Import components that you create here
import './LandingPage.css';
import TeamPage from './TeamPage/TeamPage';
import Explanation from './Explanation/Explanation'
import StyleSheet from '../StyleSheet/StyleSheet'
import Features from './Features/Features'
import Tools from './Tools/Tools'

function LandingPage() {
    return (
        //Use components that you import here
        <div className="container">
            <Explanation />
            <Features/>
            <Tools />
            <TeamPage />
        </div>
    )
}

export default LandingPage;