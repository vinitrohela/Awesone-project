import React from 'react';
import { Text } from 'react-native';
import ReactNative from 'react-native';
import 'react-native';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import Index from '../index.android.js';
import Button from '../index.android';
import TouchableNativeFeedback from 'react-native';
const expct = require('chai').expect
import renderer from 'react-test-renderer';
import appium from 'io.appium.java_client.android.AndroidDriver';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

var static AndroidDriver driver;

describe('<Index />', () => {
  it('should be a view component', () => {
    const wrapper = shallow(<Index></Index>);
    expct(wrapper.type()).to.equal(View);
  });
  it('should have a title Welcome to React Native vinit swapnil!', () => {
    const wrapper1 = shallow(<Index/>);
    expct(wrapper1.contains(<Text>Welcome to React Native vinit swapnil!</Text>)).to.equal(true);
  });

  it('should have a title To get started, edit index.android.js', () => {
    const wrapper2 = shallow(<Index/>);
    expct(wrapper2.contains(<Text>To get started, edit index.android.js</Text>)).to.equal(true);
  });
  it('should have a title Double tap R on your keyboard to reload', () => {
    const wrapper3 = shallow(<Index/>);
    expct(wrapper3.contains(<Text>Double tap R on your keyboard to reload,{'\n'}
    Shake or press menu button for dev menu</Text>)).to.equal(true);
  });
  it('should have a button named Button', () => {
    const wrapper4 = shallow(<Index/>)
    expct(wrapper4.contains(<Button title="sumbit"></Button>)).to.equal(true);
  });
  it('test alert message on button click event', () => {
    driver = new AndroidDriver();
    driver.findElement(By.name("btnSubmit")).click();
    // driver.findElement()
  })
});
