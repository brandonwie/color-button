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
