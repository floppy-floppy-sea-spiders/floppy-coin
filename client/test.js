import Jest from 'jest';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EnzymeToJson from 'enzyme-to-json';
import ItineraryCreator from './components/ItineraryCreator.jsx';
import UserContainer from './Containers/UserContainer.jsx';

configure({adapter: new Adapter()});

// describe('User Container tests', () => {
//   let wrapper;

//   beforeAll(() => {
//     wrapper = shallow(<UserContainer />)
//   });

//   it('User Creator should render a form element with the correct input fields', () => {
//     expect(wrapper.find('input').simulate('change', {target: {value: 'My new value'}})
//   })
// })

describe('Itinerary Creator tests', () => {
  let wrapper;
  
  beforeAll(() => {
    wrapper = shallow(<ItineraryCreator />);
  });

  it('Itinerary Creator should render a form element with the correct input fields', () => {
    expect(wrapper.find('form').text()).toMatch('Where would you like to go?');
  })
  
});