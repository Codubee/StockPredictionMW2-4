import { MyNavLink } from "./MyNavLink";
import { shallow } from 'enzyme';
import { hasBeenRendered, navlinks } from "../../global";

const { url, label } = navlinks[0];

const wrapper = shallow(
    <MyNavLink 
        url={url} 
        label={label}
    />
);

describe("Test MyNavLink component", () => {

    it("should render", () => {   
        hasBeenRendered(wrapper);
    });
    
    it("should have label", () => {   
        expect(wrapper.contains(label)).toBeTruthy();
    });
    
    it("should have url", () => { 
        expect(wrapper.find(`[href="${url}"]`)).toHaveLength(1);
    });
});