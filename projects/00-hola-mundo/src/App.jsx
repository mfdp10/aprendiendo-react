import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hola mundo cruel!</h1>

      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.824 3.37891C12.933 3.37891 8.688 6.17591 6.551 10.2809C5.343 10.7519 4.311 11.5859 3.586 12.6519C2.082 13.1749 1 14.6219 1 16.3269C1 18.0319 2.082 19.4789 3.586 20.0019C4.311 21.0679 5.343 21.9009 6.551 22.3729C8.689 26.4769 12.934 29.2749 17.824 29.2749C24.862 29.2749 30.568 23.4769 30.568 16.3269C30.568 9.17591 24.862 3.37891 17.824 3.37891ZM17.824 26.6859C14.569 26.6859 11.671 25.1379 9.804 22.7269C8.892 21.5479 8.227 20.1629 7.886 18.6529C7.717 17.9049 7.626 17.1279 7.626 16.3279C7.626 15.5279 7.717 14.7509 7.886 14.0039C8.227 12.4929 8.892 11.1079 9.804 9.92991C11.671 7.51891 14.568 5.97091 17.824 5.97091C23.455 5.97091 28.019 10.6079 28.019 16.3289C28.019 22.0499 23.454 26.6859 17.824 26.6859Z"
          fill="#FF8F1E"
        />
        <path
          d="M23.6 10H12.4C11.6279 10 11 10.6279 11 11.4V19.1C11 19.8721 11.6279 20.5 12.4 20.5H17.3V21.9H15.2V23.3H20.8V21.9H18.7V20.5H23.6C24.3721 20.5 25 19.8721 25 19.1V11.4C25 10.6279 24.3721 10 23.6 10ZM12.4 17.7V11.4H23.6L23.6014 17.7H12.4Z"
          fill="#FF8F1E"
        />
      </svg>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
