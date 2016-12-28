import 'react-native';
import React from 'react';
import Index from '../index.ios.js';
import Button from '../index.ios';
import { shallow } from 'enzyme';
const expct = require('chai').expect
import { View } from 'react-native';
import { Text } from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// describe('Button', () => {
//   test('Renders', () => {
//     const component = renderer.create(
//       <Button>
//       Button
//       </Button>
//     )
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })

describe('<Index />', () => {
  it('should be a view component', () => {
    const wrapper = shallow(<Index></Index>);
    expct(wrapper.type()).to.equal(View);
  });
  it('should have a title Welcome to React Native vinit swapnil!', () => {
    const wrapper1 = shallow(<Index/>);
    expct(wrapper1.contains(<Text>Welcome to React Native vinit swapnil!</Text>)).to.equal(true);
  });
  it('should have a title To get started, edit index.ios.js', () => {
    const wrapper1 = shallow(<Index/>);
    expct(wrapper1.contains(<Text>To get started, edit index.ios.js</Text>)).to.equal(true);
  });
  it('should have a title Press Cmd+R to reload', () => {
    const wrapper1 = shallow(<Index/>);
    expct(wrapper1.contains(<Text>Press Cmd+R to reload,{'\n'}
    Cmd+D or shake for dev menu</Text>)).to.equal(true);
  });
});
