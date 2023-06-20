import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <section className="tfCard">
    <TwitterFollowCard userName="pedro" name="Roberto" isFollowing={false} />
    <TwitterFollowCard userName="unknown" name="Andres" isFollowing />
    <TwitterFollowCard userName="pheralb" name="Andres" isFollowing={false} />
    <TwitterFollowCard userName="pheralb" name="Andres" isFollowing />
  </section>
);
