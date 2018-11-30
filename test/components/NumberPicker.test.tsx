import * as React from 'react';
import { shallow } from 'enzyme';
import NumberPicker from "../../src/components/NumberPicker";

describe('NumberPicker', () => {
  describe('render', () => {
    test('Should render div', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div')).toBeTruthy();
    })
});
