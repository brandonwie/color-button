import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [isDisabled, setIsDisabled] = useState(false);
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <MainDiv>
      <button
        style={{
          backgroundColor: isDisabled ? 'gray' : buttonColor,
          color: 'white',
        }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
