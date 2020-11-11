import React from 'react';
import { Jumbotron, Media } from 'reactstrap';
import ReactPicture from './Pictures/ReactPicture.png'
import NodePicture from './Pictures/NodePicture.png'
import JiraPicture from './Pictures/JiraPicture.png'
import GithubPic from './Pictures/GithubPic.png'
import './ToolsStyle.css'

function Tools() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Tools</h1>
                <p className="lead">Some of the tools we will be using to work on this project include React.js to develop the 
                front end, node.js to develop the back end, Jira to help keep track of what tasks must be done by who and when,
                and finally GitHub which will simplify the process of working as a team and keeping track of multiple changes in the code.</p>
                <hr classname="my-2" />
                <Media>
                    <Media left top href="#">
                        <Media object src={ReactPicture} />
                    </Media>
                    <Media>
                        <Media left middle href="#">
                            <Media object src={NodePicture} />
                        </Media>
                    </Media>
                    <Media>
                        <Media left bottom href="#">
                            <Media object src={JiraPicture} />
                        </Media>
                    </Media>
                    <Media>
                        <Media right bottom href="#">
                            <Media object src={GithubPic} />
                        </Media>
                    </Media>
                </Media>
            </Jumbotron>
        </div>
    );
};

export default Tools;