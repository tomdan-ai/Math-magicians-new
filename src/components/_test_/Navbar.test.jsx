import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
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

describe('Navbar Snapshot', () => {
  test('Navbar matches DOM snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter basename="/">
        <Navebar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
