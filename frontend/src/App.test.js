import App from './App';
import MyNavbar from "./components/MyNavbar/MyNavbar";
import { shallow, mount } from "enzyme";
import { hasBeenRendered } from "./global";
import SamplePage from './components/SamplePage/SamplePage';
import { MemoryRouter } from 'react-router';

const wrapper = shallow(<App />);

describe("Test App Component", () => {
  it("should render", () => {
    hasBeenRendered(wrapper);
  });

  it("should render navbar", () => {
    hasBeenRendered(wrapper.find(MyNavbar));
  });

  // issues with enzyme + React 17: https://github.com/enzymejs/enzyme/issues/2462
  // test('root path should go to landing page', () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={[ '/' ]}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find(LandingPage)).toHaveLength(1);
  //   expect(wrapper.find(SamplePage)).toHaveLength(0);
  // });
});
