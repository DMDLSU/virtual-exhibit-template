import { useState } from "react";
import "../styles/warp.css";

export default function WarpTransition({ href, children }) {
  const [warp, setWarp] = useState(false);

  function travel(e) {
    e.preventDefault();

    setWarp(true);

    setTimeout(() => {
      window.location.href = href;
    }, 700);
  }

  return (
    <>
      <a href={href} onClick={travel}>
        {children}
      </a>

      {warp && (
        <div className="warp">
          {Array.from({ length: 35 }).map((_, i) => (
            <span
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.2}s`
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
