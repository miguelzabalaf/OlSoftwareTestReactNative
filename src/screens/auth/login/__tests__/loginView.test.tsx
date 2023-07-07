// Dependencies
import React from 'react';

// Screens
import LoginScreen from '..';
import {describe, it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('LoginScreen', () => {
  it('renders correctly', () => {
    renderer.create(<LoginScreen />);
  });
});
