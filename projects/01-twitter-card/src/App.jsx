import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src="https://unavatar.io/twitter/kikobeats"
            alt="avatar de usuario de twitter"
          />
          <div className="tw-followCard-info">
            <strong>hola que tal</strong>
            <span className="tw-followCard-infoUserName">@loquesea</span>
          </div>
        </header>
        <aside>
          <button className="tw-followCard-button">Seguir</button>
        </aside>
      </article>
    </>
  );
}

export default App;
