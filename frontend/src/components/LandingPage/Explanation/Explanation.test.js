import Explanation from "./Explanation";
import { hasBeenRendered } from "../../global";
import { shallow } from "enzyme";

const wrapper = shallow(<Explanation />);

describe("Test LandingPage Component", () => {
    it("should render", () => {
        hasBeenRendered(wrapper);
    });

    it("should render navbar", () => {
        hasBeenRendered(wrapper.find(Explanation));
    });
});