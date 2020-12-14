import { render, screen } from '@testing-library/react';
import Tools from './Tools';
import React from 'react';

/**
 * Checks that the element has been rendered
 * using the regex expression.
 * 
 * @param {Matcher} matcher Regex expression.
 */
function testRender(regex) {
    render(<Tools />);
    const element = screen.getByText(regex);
    expect(element).toBeInTheDocument();
}

test("renders stock prediction title", () =>{
    testRender(/node.js to develop the back end/i);
});

test("renders Fall 2020", () => {
    testRender(/Jira to help keep track/i);
});