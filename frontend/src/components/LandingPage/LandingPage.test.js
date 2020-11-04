import LandingPage from "./LandingPage";
import { hasBeenRendered } from "../../global";
import { shallow } from "enzyme";

const wrapper = shallow(<LandingPage />);

describe("Test LandingPage Component", () => {
    it("should render", () => {
        hasBeenRendered(wrapper);
    });
});