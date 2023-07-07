// Dependencies
import React from 'react';

// Screens
import ScreenLayout from '..';
import {describe, it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('ScreenLayout', () => {
  it('renders correctly', () => {
    renderer.create(
      <ScreenLayout>
        <></>
      </ScreenLayout>,
    );
  });
});
