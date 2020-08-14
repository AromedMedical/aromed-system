import React from 'react';
import { shallow } from 'enzyme';
import SearchDoctor from '../SearchDoctor/SearchDoctor'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose';

// const changeOnInput = (wrapper, inputSelector, newValue)=> {
//     const input = wrapper.find(inputSelector)
//     input.simulate('change', {
//         target: {value: newValue},
//     })
//     return wrapper.find(inputSelector)
// }
describe('SearchDoctor Component', () => {

    // it('It should render without errors', () =>{
    //     const wrapper = shallow(<SearchDoctor.SearchBase {...props}/>);
    //     expect(wrapper.find('.mt-2 text-center text-danger').length).toBe(1)
    // });

    it('div should render without errors', () =>{
        const component = shallow(<SearchDoctor />);
        const wrapper = component.find('.container col-lg-5 my-3 min-vh-100 d-flex flex-column justify-content-center');
        expect(wrapper.length).toBe(0)
    });

    it('form should render without errors', () =>{
        const component = shallow(<SearchDoctor />);
        const wrapper = component.find('.bg-light p-5');
        expect(wrapper.length).toBe(0)
    });

    it('h3 should render without errors', () =>{
        const component = shallow(<SearchDoctor />);
        const wrapper = component.find('.text-center');
        expect(wrapper.length).toBe(0)
    });

    it('hr should render without errors', () =>{
        const component = shallow(<SearchDoctor />);
        const wrapper = component.find('.mb-5');
        expect(wrapper.length).toBe(0)
    });

    it('formGroup should render without errors', () =>{
        const component = shallow(<SearchDoctor />);
        const wrapper = component.find('.mt-5');
        expect(wrapper.length).toBe(0)
    });

    it('button should render without errors', () =>{
        const component = shallow(<SearchDoctor />);
        const wrapper = component.find('.btn-block');
        expect(wrapper.length).toBe(0)
    });

    // it('It should render without errors', () =>{
    //     const wrapper = shallow(<SearchDoctor />);
    //     changeOnInput(
    //         wrapper,
    //         'input#email',
    //         'Jack'
    //     )
    //     changeOnInput(
    //         wrapper,
    //         'input#password',
    //         'Jack'
    //     )
    //     changeOnInput(
    //         wrapper,
    //         'input#confirmpassowrd',
    //         'Jack'
    //     )
    // });

})