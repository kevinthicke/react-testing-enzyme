import * as React from 'react';
import { shallow } from 'enzyme';
import NumberPicker from "../../src/components/NumberPicker";

describe('NumberPicker', () => {
  describe('render', () => {
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
    test('First atom should has a plus and third atom should has a minus', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div').childAt(0).text()).toBe('+');
      expect(wrapper.find('div').childAt(2).text()).toBe('-');
    });
    test('Second atom should has a 0', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div').childAt(1).text()).toBe('0');
    })

});
