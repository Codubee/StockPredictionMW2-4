import Features from './Features'
import { hasBeenRendered } from "../../../global";
import { shallow } from "enzyme";
import { Col, CardHeader, CardText } from 'reactstrap';
import { featuresArray } from '../../../global'
/**
 * Checks if the component inside the wrapper has the expected text.
 * 
 * @param {ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>} wrapper Shallow wrapper.
 * @param {any} component Component.
 * @param {number} index Component index.
 * @param {string} expectedText Expected text.
 */
function hasText(wrapper, component, index, expectedText) {
    expect(wrapper.find(component).at(index).children().equals(expectedText)).toBeTruthy();
}

const wrapper = shallow(<Features />);

describe("Test Features Component", () => {
    it("should render features component", () => {
        hasBeenRendered(wrapper);
    });

    it("should have 4 features", () => {
        expect(wrapper.find(Col)).toHaveLength(4);
    });

    it("should have Guess Price of Stock", () => {
        const { feature, desc } = featuresArray[0];
        hasText(wrapper, CardHeader, 0, feature);
        hasText(wrapper, CardText, 0, desc)
    });

    it("should have Stock Information", () => {
        const { feature, desc } = featuresArray[1];
        hasText(wrapper, CardHeader, 1, feature);
        hasText(wrapper, CardText, 1, desc)
    });

    it("should have Stock News Information", () => {
        const { feature, desc } = featuresArray[2];
        hasText(wrapper, CardHeader, 2, feature);
        hasText(wrapper, CardText, 2, desc)
    });

    it("should have Weather", () => {
        const { feature, desc } = featuresArray[3];
        hasText(wrapper, CardHeader, 3, feature);
        hasText(wrapper, CardText, 3, desc)
    });
});

