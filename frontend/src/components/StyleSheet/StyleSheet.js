import React from 'react'
import './StyleSheet.css'


function StyleSheet() {
    return (
    <div>
        <br />
        <h1 className="text-center">Headings and Backgrounds</h1>
        <div className="dark-background">
            <h1 className="main-heading">Main Heading</h1>
            <p className="sub-heading">Subheading</p>
            <p className="body-text">Body text</p>
        </div>
        
        <div className="light-background">
            <h1 className="main-heading">Light Background Main Heading</h1>
            <figure>
                <img className="inline-image" src="../logo512.png"/>
                <figcaption>Caption of image</figcaption>
            </figure>
        </div>

        <br />
        <h1 className="text-center">Layouts</h1>
        <h4>Two Equal Columns</h4>
        <div className="row">
            <div className="light-background equal-column">
                <h1 className="main-heading">Column One</h1>
                <form> 
                    <label className="text-center">Text Input</label><br/>
                    <input className="body-text" type="text" placeholder="input"/>
                    <hr />
                    <input className="button" type="submit" name="button" value="Button"/>
                </form>
            </div>
            <div className="dark-background equal-column">
                <h1 className="main-heading">Column Two</h1>
                <form> 
                    <label className="text-center">Text Input</label><br/>
                    <input className="body-text" type="text" placeholder="input"/>
                    <hr />
                    <input className="button" type="submit" name="button" value="Button"/>
                </form>
            </div>
        </div>

        <h4>Two Unequal Columns</h4>
        <div className="row">
            <div className="light-background main-column">
                <h1 className="main-heading">Column One</h1>
                <a href="https://www.utdallas.edu" target="_blank">Link</a>
            </div>
            <div className="dark-background side-column">
                <h1 className="main-heading">Column Two</h1>
                <a href="https://www.utdallas.edu" target="_blank">Link</a>
            </div>
        </div>
        <br />
        <br />

        

        <br />
        <br />
    </div>
    )
}

export default StyleSheet