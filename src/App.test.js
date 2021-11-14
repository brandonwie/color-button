import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toHaveStyle({
    backgroundColor: 'red',
  });
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toHaveStyle({
    backgroundColor: 'red',
  });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({
    backgroundColor: 'blue',
  });

  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const button = screen.getByRole('button', { name: /change to blue/i });
  expect(button).toBeEnabled();

  // check that the checkbox start out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });
  const button = screen.getByRole('button', { name: /change to blue/i });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

// my answer for the quiz

test('Button is gray when disabled, and red when it is enabled', () => {
  render(<App />);
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletBlue')).toBe(
      'Medium Violet Blue'
    );
  });
});
