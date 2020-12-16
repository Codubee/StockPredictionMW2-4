import { shallow } from "enzyme";
import { companyNews, hasBeenRendered } from "../../global";
import CompanyNews from "./CompanyNews";
import { Card } from "reactstrap";

const wrapper = shallow(<CompanyNews />);

describe("Test Company News Component", () => {
    it("should render", () => {
        hasBeenRendered(wrapper);
    });

    it("should show company news", () => {
        const newsCards = wrapper.find(Card);
        expect(newsCards.length).toBeGreaterThan(0);
        expect(companyNews.length === newsCards.length).toBeTruthy();
        for(let i = 0; i < newsCards.length; i++) {
            for(let prop in newsCards[i]) {
                expect(newsCards.at(i).html()).toContain(newsCards[i][prop]);
            }
        }
    }); 
});