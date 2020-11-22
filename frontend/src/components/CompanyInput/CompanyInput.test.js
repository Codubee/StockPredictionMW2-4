import React from "react";
import { shallow } from "enzyme";
import CompanyInput from "./CompanyInput";
import { Input } from "reactstrap";
import { hasBeenRendered } from "../../global";

const wrapper = shallow(<CompanyInput />);

describe("Test company input component", () => {
    it("should render", () => {
        hasBeenRendered(wrapper);
    });

    it("should take in company's name", () => {
        const companyName = "Sabre";
        const event = { target: { value: companyName } };
        wrapper.find(Input).simulate('change', event);
        expect(wrapper.find(Input).props().value).toBe(companyName);
    });
});