import App from './App';
import MyNavbar from "./components/MyNavbar/MyNavbar";
import { shallow } from "enzyme";
import { hasBeenRendered } from "./global";
import { Route } from 'react-router';
import SamplePage from './components/SamplePage/SamplePage';
import LandingPage from './components/LandingPage/LandingPage';

const wrapper = shallow(<App />);

const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
  const routeProps = route.props();
  pathMap[routeProps.path] = routeProps.component;
  return pathMap;
}, {});

describe("Test App Component", () => {
  it("should render", () => {
    hasBeenRendered(wrapper);
  });

  it("should render navbar", () => {
    hasBeenRendered(wrapper.find(MyNavbar));
  });

  it('renders input page', () => {
    expect(pathMap['/input']).toBe(SamplePage);
  });

  it('renders landing page', () => {
    expect(pathMap['/']).toBe(LandingPage);
  });
});