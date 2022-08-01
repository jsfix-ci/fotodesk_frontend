import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './Header';
import {MemoryRouter} from 'react-router-dom';

test('renders learn react link', () => {
  render(<Header />, {wrapper: MemoryRouter});
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders with spanshot', () => {
  const data = render(<Header />, {wrapper: MemoryRouter});
  expect(data).toMatchSnapshot();
});
