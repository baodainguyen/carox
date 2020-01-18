import React from 'react';
import { render } from '@testing-library/react';
import Carox from './Carox';

test('renders learn react link', () => {
  const { getByText } = render(<Carox />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
