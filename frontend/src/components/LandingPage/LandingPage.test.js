import LandingPage from "./LandingPage";
import { hasBeenRendered } from "../../global";
import { shallow } from "enzyme";
import { MyNavbar } from "../MyNavbar/MyNavbar";

const wrapper = shallow(<LandingPage />);

describe("Test LandingPage Component", () => {
    it("should render", () => {
        hasBeenRendered(wrapper);
    });

    it("should render navbar", () => {
        hasBeenRendered(wrapper.find(MyNavbar));
    });
});