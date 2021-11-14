import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const handleClick = () => setButtonColor(newButtonColor);
  const handleChange = () => setIsChecked(!isChecked);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor, color: 'white' }}
        onClick={handleClick}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        defaultChecked={false}
        aria-checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
