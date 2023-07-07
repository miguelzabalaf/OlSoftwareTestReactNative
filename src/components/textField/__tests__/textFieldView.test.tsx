// Dependencies
import React from 'react';
import {describe, it, jest, expect} from '@jest/globals';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react-native';

// Screens
import TextField from '..';

describe('TextField', () => {
  const mockFn = jest.fn();
  it('renders correctly', () => {
    renderer.create(
      <TextField
        onChangeText={mockFn}
        value={'valueExample'}
        placeholder={'placeholderExample'}
      />,
    );
  });

  it('renders correctly with secureTextEntry', () => {
    renderer.create(
      <TextField
        onChangeText={mockFn}
        value={'valueExample'}
        placeholder={'placeholderExample'}
        secureTextEntry
      />,
    );
  });

  it('change text correctly', () => {
    render(
      <TextField
        onChangeText={mockFn}
        value={'valueExample'}
        placeholder={'placeholderExample'}
      />,
    );
    const input = screen.getByPlaceholderText('placeholderExample');
    expect(input).toBeTruthy();
    input.props.onChangeText('newText');
    expect(mockFn).toHaveBeenCalled();
    expect(input.props.value).toBe('valueExample');
  });
});
