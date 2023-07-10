// Dependencies
import React from 'react';
import {describe, it, jest, expect} from '@jest/globals';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

// Screens
import Button from '..';

describe('Button', () => {
  it('renders correctly', () => {
    renderer.create(<Button />);
  });

  it('renders correctly with children', () => {
    renderer.create(<Button>{'childrenExample'}</Button>);
  });

  it('renders correctly with loading', () => {
    renderer.create(<Button loading />);
  });

  it('renders correctly with children and loading', () => {
    renderer.create(<Button loading>{'childrenExample'}</Button>);
  });

  it('renders correctly with onPress', () => {
    renderer.create(<Button onPress={jest.fn()} />);
  });

  it('renders correctly with children and onPress', () => {
    renderer.create(<Button onPress={jest.fn()}>{'childrenExample'}</Button>);
  });

  it('renders with exactly one child', () => {
    const {getByText} = render(<Button>{'childrenExample'}</Button>);
    expect(getByText('childrenExample')).toBeTruthy();
  });

  it('render loading correctly', () => {
    const {getByTestId} = render(<Button loading />);
    expect(getByTestId('ButtonActivityIndicatorTestID')).toBeTruthy();
  });

  it('render children correctly with variantTestID', () => {
    const {getByTestId} = render(<Button>{'childrenExample'}</Button>);
    expect(getByTestId('ButtonTestIDTypography')).toBeTruthy();
  });
});
