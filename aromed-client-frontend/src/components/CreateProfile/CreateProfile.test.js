import React from 'react';
import { shallow } from 'enzyme';
import CreateProfile, { CreateProfileBase } from '../CreateProfile/CreateProfile'

describe('CreateProfile Component', () => {
    it('div should render without errors', () => {
        const component = shallow(<CreateProfile />);
        const wrapper = component.find('.container col-lg-5 my-3 min-vh-100 d-flex flex-column justify-content-center');
        expect(wrapper.length).toBe(0)
    });

    it('form should render without errors', () => {
        const component = shallow(<CreateProfile />);
        const wrapper = component.find('.bg-light p-5');
        expect(wrapper.length).toBe(0)
    });

    it('h3 should render without errors', () => {
        const component = shallow(<CreateProfile />);
        const wrapper = component.find('.text-center');
        expect(wrapper.length).toBe(0)
    });

    it('hr should render without errors', () => {
        const component = shallow(<CreateProfile />);
        const wrapper = component.find('.mb-5');
        expect(wrapper.length).toBe(0)
    });

    it('formGroup should render without errors', () => {
        const component = shallow(<CreateProfile />);
        const wrapper = component.find('.mt-5');
        expect(wrapper.length).toBe(0)
    });

    it('button should render without errors', () => {
        const component = shallow(<CreateProfile />);
        const wrapper = component.find('.btn-block');
        expect(wrapper.length).toBe(0)
    });

    it('Validate Date', () => {
        const wrapper = shallow(<CreateProfileBase />);
        expect(wrapper.instance().isValidDate("1995/12/23")).toEqual(false);
    })

    it('Validate Date', () => {
        const wrapper = shallow(<CreateProfileBase />);
        expect(wrapper.instance().isValidDate("1995-15-23")).toEqual(false);
    })

    it('Validate Date', () => {
        const wrapper = shallow(<CreateProfileBase />);
        expect(wrapper.instance().isValidDate("1995-12-23")).toEqual(true);
    })

    it('Validate Values', () => {
        const wrapper = shallow(<CreateProfileBase />);
        expect(wrapper.instance().handleValidation("Ben", "King", "1984-10-14", "Male", "2264  Address 1", "0771234567")).toEqual(true);
    })

    it('Validate Values', () => {
        const wrapper = shallow(<CreateProfileBase />);
        expect(wrapper.instance().handleValidation("Ben", "King", "1984-10-14", "Male", "2264  Address 1", "01234567")).toEqual(false);
    })

    it('Validate Values', () => {
        const wrapper = shallow(<CreateProfileBase />);
        expect(wrapper.instance().handleValidation("Ben", "King", "1984-10-14", "Male", "2264  Address 1", "A01234567")).toEqual(false);
    })

    it('Validate Values', () => {
        const wrapper = shallow(<CreateProfileBase />);
        expect(wrapper.instance().handleValidation("B3n", "King", "1984-10-14", "Male", "", "0771234567")).toEqual(false);
    })

    it('Validate Values', () => {
        const wrapper = shallow(<CreateProfileBase />);
        expect(wrapper.instance().handleValidation("Ben", "K1ng", "1984-10-14", "Male", "", "0771234567")).toEqual(false);
    })
})