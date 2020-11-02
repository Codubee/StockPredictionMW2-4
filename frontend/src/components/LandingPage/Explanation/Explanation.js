import React from 'react';
import { Jumbotron } from 'reactstrap';

const Explanation = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Stock Prediction</h1>
        <p className="lead">This projects decides whether a stock is good or bad depending on news headlines</p>
        <hr className="my-2" />
        <p>
            This project was created during the Fall 2020 session of Codubee.
            We built this project as a way to try and guess which stocks might do well or not depending one recent news headlines.
        </p>
      </Jumbotron>
    </div>
  );
};

export default Explanation;