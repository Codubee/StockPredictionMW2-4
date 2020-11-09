import App from './App';
import MyNavbar from "./components/MyNavbar/MyNavbar";
import { shallow } from "enzyme";
import { hasBeenRendered } from "./global";

const wrapper = shallow(<App />);

describe("Test App Component", () => {
  it("should render", () => {
      hasBeenRendered(wrapper);
  });

  it("should render navbar", () => {
      hasBeenRendered(wrapper.find(MyNavbar));
  });
});
