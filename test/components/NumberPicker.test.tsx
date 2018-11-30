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
});
