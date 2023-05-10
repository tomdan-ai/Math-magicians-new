import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navebar from '../Navbar';

describe('Navbar', () => {
  test('Navbar is being rendered correctly', () => {
    const container = document.createElement('div');
    render(
      <BrowserRouter basename="/">
        <Navebar />
      </BrowserRouter>,
      container,
    );
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });
});
