# Testing React with Jest and Testing Library

[Link to the course on Udemy](https://www.udemy.com/course/react-testing-library)

started on November 14, 2021

## Simple App: Color Button

### Main functions

- `render(<App />)`: virtual DOM
- `screen.*`: select element(s) from the V/ DOM
- `fireEvent`: event handling

most importantly, a big take from here will be about ARIA(Accessible Rich Internet Applications)

### Methods

- `screen.getByRole`
  [W3C Role Definitions](https://www.w3.org/TR/wai-aria/#role_definitions)
- `expect.toHaveStyle`
- `expect.toBeEnabled`, `expect.toBeDisabled`
- `expect.not.toBeChecked`

## Unit Testing functions

- when a function is used in multiple files
- when a function has too many edge cases
- `describe` > can have multiple test functions inside

## Review

1. Test interactivity using `fireEvent`
2. jest-dom assertions:

   - `toBeEnabled()`
   - `toBeDisabled()`
   - `toBeChecked()`

3. `getByRole` option `{ name: }`
4. `Jest` describe to group tests
5. Unit testing functions - a function in a component is too complicated so you don't want to render it multiple times (theoratically)

## ESLint for Testing Library and Jest-DOM
