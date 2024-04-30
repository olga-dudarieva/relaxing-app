import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('Layout renders', () => {
  // ARRANGE
  render(<Layout />);

  // ASSERT
  const textElement = screen.getByText(/Layout/i)
  expect(textElement).toBeInTheDocument();
});
