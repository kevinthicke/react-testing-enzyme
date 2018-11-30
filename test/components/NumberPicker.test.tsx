import * as React from 'react';
import { shallow } from 'enzyme';
import NumberPicker from "../../src/components/NumberPicker";

describe('NumberPicker', () => {
  describe('render without click', () => {
    test('Should render a molecule div', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div')).toBeTruthy();
    });
    test('Should render three atoms', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div').children()).toHaveLength(3);
    });
    test('Should be two buttons', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div').children('button')).toHaveLength(2);
    });
    test('Should be a span', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div').children('span')).toBeTruthy();
    });
    test('First and third atoms should be a buttons', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div').childAt(0).is('button')).toBeTruthy();
      expect(wrapper.find('div').childAt(2).is('button')).toBeTruthy();
    });
    test('Second atom should be a span', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div').childAt(1).is('span')).toBeTruthy();
    });
    test.skip('First atom should show a plus and third atom should show a minus', () => {
      const wrapper = shallow(<NumberPicker/>);
      const buttons = wrapper.find('button').map( node => node.text());
      expect(buttons).toEqual(['+,-']);
    });
    test.skip('Second atom should show a 0', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div').childAt(1).text()).toBe('0');
    });
    test('The order of atoms should be [+,0,-]', () => {
      const wrapper = shallow(<NumberPicker/>);
      const text = wrapper.find('div').children()
                                .map( node => node.text()) //que ocurre si no ponemos .text()?
      expect(text).toEqual(['+','0','-']);
    });
  });

  describe('render with first click', () => {
    test('The second atom shows number 1 with plus click', () => {
      const wrapper = shallow(<NumberPicker/>);
      wrapper.find('button').at(0).simulate('click');
      expect(wrapper.find('span').text()).toBe('1');
    });
    test('The second atom shows number -1 with minus click', () => {
      const wrapper = shallow(<NumberPicker/>);
      wrapper.find('button').at(1).simulate('click');
      expect(wrapper.find('span').text()).toBe('-1')
    })
  });
});

