import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <MainDiv>
      <pre>{JSON.stringify(buttonColor, null, 2)}</pre>
      <button
        style={{
          backgroundColor: isDisabled ? 'gray' : buttonColor,
        }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={false}
        aria-checked={isDisabled}
        onChange={() => setIsDisabled(!isDisabled)}
      />
      <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </MainDiv>
  );
}

export default App;

const MainDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
