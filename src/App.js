import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
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
    </div>
  );
}

export default App;
