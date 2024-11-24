import React, { useState } from 'react';

function App() {
  // State to store the count
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      
      {/* Display the count */}
      <p>Count: {count}</p>

      {/* Buttons to increment and decrement */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
