import { MyNavbar } from "./MyNavbar";
import { MyNavLink } from "../MyNavLink/MyNavLink";
import { shallow } from 'enzyme';
import { hasBeenRendered, navlinks } from "../../global";

/**
 * Checks if the navbar has the link.
 * 
 * @param {any} wrapper Shallow component
 * @param {number} index Index position of the link in the navbar.
 */
const checkLink = (wrapper, index) => {
    let navlink = navlinks[index];
    for(let prop in navlink) {
        expect(wrapper.find(MyNavLink).at(index).html().includes(navlink[prop])).toBeTruthy();
    }
}

const wrapper = shallow(<MyNavbar />);

describe("Test Navbar component", () => { 

    it("should render", () => {
        hasBeenRendered(wrapper);
    });

    it("should have 3 links", () => {
        expect(wrapper.find(MyNavLink)).toHaveLength(3);
    });
    
    it("should have Github link", () => {
        checkLink(wrapper, 0);
    });
    
    it("should have User input link", () => {
        checkLink(wrapper, 1);
    });
    
    it("should have Home page or landing page link", () => {
        checkLink(wrapper, 2);
    });
});