// Dependencies
import React from 'react';
import {describe, it, expect} from '@jest/globals';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react-native';

// Screens
import Typography from '..';

describe('Typography', () => {
  it('renders correctly', () => {
    renderer.create(<Typography>textExample</Typography>);
  });

  it('renders correctly with weight', () => {
    renderer.create(<Typography weight="Bold">textExample</Typography>);
  });

  it('renders correctly with color', () => {
    renderer.create(<Typography color="red">textExample</Typography>);
  });

  it('renders correctly with size', () => {
    renderer.create(<Typography size={40}>textExample</Typography>);
  });

  it('renders correctly with weight, color and size', () => {
    renderer.create(
      <Typography weight="Bold" color="red" size={40}>
        textExample
      </Typography>,
    );
  });

  it('renders correctly with specific text', () => {
    render(<Typography weight="Bold">textExample</Typography>);
    expect(screen.getByText('textExample')).toBeTruthy();
  });
});
