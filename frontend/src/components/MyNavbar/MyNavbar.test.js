import MyNavbar from "./MyNavbar";
import { render, shallow } from 'enzyme';
import { 
    hasBeenRendered, 
    navlinks, 
    navbrand 
} from "../../global";

/**
 * Checks if the navbar has the link.
 * 
 * @param {cheerio.Cheerio} wrapper Render wrapper.
 * @param {any} link Link to check.
 * @param {string} className class name of element to check link in.
 */
const checkLink = (wrapper, link, className) => {
    const { label, url } = link;
    const element = wrapper.find(`.${className}[href="${url}"]`);
    expect(element).toBeTruthy();
    expect(element.text() === label).toBe(true);
}

const component = <MyNavbar />;
const renderWrapper = render(component);

describe("Test Navbar component", () => { 

    it("should render", () => {
        hasBeenRendered(shallow(component));
    });

    it("should have brand that links to landing page", () => {
        checkLink(renderWrapper, navbrand, "navbar-brand");
    });

    it("should have 3 links", () => {
        expect(renderWrapper.find(".nav-link")).toHaveLength(3);
    });
    
    it("should have Github link", () => {
        checkLink(renderWrapper, navlinks[0], "nav-link");
    });
    
    it("should have User input link", () => {
        checkLink(renderWrapper, navlinks[1], "nav-link");
    });
    
    it("should have landing page link", () => {
        checkLink(renderWrapper, navlinks[2], "nav-link");
    });
});