import { shallow } from 'enzyme';
import React from 'react';
import TeamCard from './TeamCard';


describe("Testing of TeamCard component", () => {
    it('pass props and render them correctly',()=>{
        const wrapper = shallow(<TeamCard name="Miguel" />);
        const cardTitle = wrapper.find('CardTitle').shallow().text();
        expect(cardTitle).toEqual('Miguel');
    })
});
