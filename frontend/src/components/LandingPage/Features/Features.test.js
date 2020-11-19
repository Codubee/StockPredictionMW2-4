import Features from './Features'
import { hasBeenRendered } from "../../../global";
import { shallow } from "enzyme";

const wrapper = shallow(<Features />);

describe("Test Features Component", () => {
    it("should render features component", () => {
        hasBeenRendered(wrapper);
    });
});