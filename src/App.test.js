import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });
  expect(colorButton).toHaveStyle({
    backgroundColor: 'MediumVioletRed',
  });
});

test('button turns midnightblue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });
  expect(button).toHaveStyle({
    backgroundColor: 'MediumVioletRed',
  });

  fireEvent.click(button);

  expect(button).toHaveStyle({
    backgroundColor: 'MidnightBlue',
  });

  expect(button.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const button = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });
  expect(button).toBeEnabled();

  // check that the checkbox start out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });
  const button = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

// my answer for the quiz

test('Button is gray when disabled, and MediumVioletRed when it is enabled', () => {
  render(<App />);
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
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
