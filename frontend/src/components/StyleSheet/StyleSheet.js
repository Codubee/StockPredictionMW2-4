import React from 'react'
import './StyleSheet.css'


function StyleSheet() {
    return (
    <div>
        <br />
        <h1 className = "text-center">Headings and Backgrounds</h1>
        <div className = "dark-background">
            <h1 className = "main-heading ">Main Heading</h1>
            <p className = "sub-heading">Subheading</p>
        </div>
        
        <div className = "light-background">
            <h1 className = "main-heading">Light Background Main Heading</h1>
            <p className = "body-text">Body text</p>
        </div>

        <br />
        <h1 className = "text-center">Layouts</h1>
        <h4>Two Equal Columns</h4>
        <div className = "row">
            <div className = "light-background two-equal-column">
                <h1 className = "main-heading">Column One</h1>
            </div>
            <div className = "dark-background two-equal-column">
                <h1 className = "main-heading">Column Two</h1>
            </div>
        </div>

        <h4>Two Unequal Columns</h4>
        <div className = "row">
            <div className = "light-background two-larger-column">
                <h1 className = "main-heading">Column One</h1>
            </div>
            <div className = "dark-background two-smaller-column">
                <h1 className = "main-heading">Column Two</h1>
            </div>
        </div>


        <h4>Three Equal Columns</h4>
        <div className = "row">
            <div className = "light-background three-equal-column">
                <h1 className = "main-heading">Column One</h1>
            </div>
            <div className = "dark-background three-equal-column">
                <h1 className = "main-heading">Column Two</h1>
            </div>
            <div className = "light-background three-equal-column">
                <h1 className = "main-heading">Column Three</h1>
            </div>
        </div>

        <h4>Three Uenqual Columns</h4>
        <div className = "row">
            <div className = "light-background left">
                <h1 className = "main-heading">Column One</h1>
                <figure className = "text-center">
                    <img className = "inline-image" src = "./logo512.png" />
                    <figcaption className = "caption text-center">Caption of image</figcaption>
                </figure>
                    
            </div>
            <div className = "dark-background middle">
                <h1 className = "main-heading">Column Two</h1>
            </div>
            <div className = "light-background right">
                <h1 className = "main-heading">Column Three</h1>
            </div>
        </div>

        <br />
        <br />
    </div>
    )
}

export default StyleSheet