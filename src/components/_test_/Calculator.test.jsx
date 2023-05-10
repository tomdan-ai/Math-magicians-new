import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../Calculator';

describe('Calculator component', () => {
    test('renders calculator with correct button labels', () => {
      render(<Calculator />);
  
      // Verify the button labels are rendered correctly
      const buttonLabels = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
      buttonLabels.forEach((label) => {
        const buttonElements = screen.queryAllByText(label);
        expect(buttonElements.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Calculator Snapshot', () => {
    test('Calculator UI matches the DOM snapshot', () => {
      const tree = renderer.create(
        <BrowserRouter basename="Calculator">
          <Calculator />
        </BrowserRouter>
      ).toJSON();
  
      expect(tree).toMatchSnapshot();
    });
  });
  