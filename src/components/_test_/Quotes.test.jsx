import { render, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Quotes from '../Quotes';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Quotes', () => {
  it('shows quote and author', async () => {
    const dummyData = [
      {
        quote: 'The will of man is his happiness.',
        author: 'Friedrich Schiller',
        category: 'happiness',
      },
    ];

    axios.get.mockResolvedValue({ data: dummyData });

    render(
      <BrowserRouter>
        <Quotes />
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('quote')).toHaveTextContent('The will of man is his happiness.');
      expect(screen.getByTestId('author')).toHaveTextContent('Friedrich Schiller');
    });
  });
});

describe('Quotes snapshot', () => {
  it('shows Quotes snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Quotes />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
