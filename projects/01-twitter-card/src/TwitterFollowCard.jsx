import { useState } from "react";

export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setIsFollowing] = useState();
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonIsFollowing = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/twitter/${userName}`}
            alt="avatar de usuario de twitter"
          />
          <div className="tw-followCard-info">
            <strong>{name}l</strong>
            <span className="tw-followCard-infoUserName">@{userName}</span>
          </div>
        </header>
        <aside>
          <button className={buttonIsFollowing} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </article>
    </>
  );
}
