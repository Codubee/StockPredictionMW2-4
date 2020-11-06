import React from 'react'
//Import components that you create here
import TeamCard from '../TeamComponent/TeamCard';

function LandingPage(){
    return(
        //Use components that you import here
        <>
        
        <h1 style = {{textAlign: "center", marginTop: "20px"}}>Meet Our Team!</h1>
        <TeamCard headshotA = "/MiguelZavala.jpg" altTextA = "Miguel Zavala Headshot" nameA = "Miguel Zavala"
        line1A = "Latino Founder of Codubee" line2A = "Software Engineer" line3A = "Cloud Engineer"
        githubA = "https://github.com/Codubee" headshotB = "/DylanHua.jpg" altTextB = "Dylan Hua Headshot" nameB = "Dylan Hua"
        line1B = "Computer Science" line2B = "UT Dallas" line3B = "Class of 2021"
        githubB = "https://github.com/DHua5922" headshotC = "/SunnyGuan.jpg" altTextC = "Sunny Guan Headshot" nameC = "Sunny Guan"
        line1C = "Computer Science" line2C = "UT Dallas" line3C = "Class of 2023"
        githubC = "https://github.com/DHua5922"/>, 
        <TeamCard headshotA = "/MaahaSakhia.png" altTextA = "Maaha Sakhia Headshot" nameA = "Maaha Sakhia"
        line1A = "Electrical Engineering" line2A = "UT Dallas" line3A = "Class of 2022"
        githubA = "https://github.com/maahasakhia" headshotB = "/NickSangha.png" altTextB = "Nick Sangha Headshot" nameB = "Nick Sangha"
        line1B = "Computer Science" line2B = "UT Dallas" line3B = "Class of 2022"
        githubB = "https://github.com/Nirvair-Sangha" headshotC = "/githubLogo.png" altTextC = "Venkata Chikkam Headshot" nameC = "Venkata Chikkam"
        line1C = "Computer Science" line2C = "UT Dallas" line3C = "Class of 2021"
        githubC = "https://github.com/vpc2513"/>

        </>

       
    )
}

export default LandingPage;