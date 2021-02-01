import StockQuote from "./StockQuote";
import { shallow } from "enzyme";
import { hasBeenRendered } from "../../../global";

const wrapper = shallow(<StockQuote />);

describe("Stock Display Component", () => {
    it("should render", () => {
        hasBeenRendered(wrapper);
    });
    
    it("should show stock quote", () => {
        const quote = {
            "c": 261.74,
            "High Price": 263.31,
            "Low Price": 260.68,
            "Open Price": 261.07
        };
        wrapper.setState({ stockQuote: quote });
        const quoteState = wrapper.state().stockQuote;
        for(let data in quoteState)
            expect(quoteState[data]).toEqual(quote[data]);
    });
});