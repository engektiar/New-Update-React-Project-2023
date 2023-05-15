import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>React update + vit </h2>
      <p>
        <h2>Create korer way</h2>
        npm create vite@latest
        <h2> run korer way</h2>
        npm i npm run dev
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
