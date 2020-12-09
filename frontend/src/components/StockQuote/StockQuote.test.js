import StockQuote from "./StockQuote";
import { shallow } from "enzyme";
import { Card } from "reactstrap";
import { hasBeenRendered, stockData } from "../../global";

const wrapper = shallow(<StockQuote />);

describe("Stock Display Component", () => {
    it("should render", () => {
        hasBeenRendered(wrapper);
    });
    
    it("should show stock quote", () => {
        stockData.forEach((quote, index) => {
            const {t, ...quoteProps} = quote;
            const card = wrapper.find(Card).at(index);
            for(let data in quoteProps) {
                expect(card.html()).toContain(data);
                expect(card.html()).toContain(quote[data]);
            }
        })
    });
});