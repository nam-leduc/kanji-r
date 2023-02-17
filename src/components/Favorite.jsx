import * as React from "react";

const style = {
  position: "absolute",
  right: "0px",
  top: "-6px",
  fontSize: "25px",
  padding: "0px",
  border: "0px",
  background: "none",
  color: "green",
};

export function Favorite({ favorite, toggleRemembered }) {
  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleRemembered();
      }}
      name="favorite"
      value={favorite ? "false" : "true"}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      style={style}
      role="favorite"
    >
      {favorite ? "★" : "☆"}
    </a>
  );
}
