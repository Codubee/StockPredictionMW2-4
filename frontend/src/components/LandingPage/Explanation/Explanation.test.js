import { render, screen } from '@testing-library/react';
import Explanation from './Explanation';

/**
 * Checks that the element has been rendered
 * using the regex expression.
 * 
 * @param {Matcher} matcher Regex expression.
 */
function testRender(regex) {
    render(<Explanation />);
    const element = screen.getByText(regex);
    expect(element).toBeInTheDocument();
}

test("renders stock prediction title", () =>{
    testRender(/Stock Prediction/i);
});

test("renders Fall 2020", () => {
    testRender(/Fall 2020/i);
});