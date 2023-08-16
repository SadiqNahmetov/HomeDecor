import React from "react";
import classes from "./secondaryButton.module.scss";

function SecondaryButton(href, disabled, children) {
  return (
    <button
      disabled={(disabled = false)}
      onClick={() => (window.location.href = href)}
      className={classes.secondary__btn + " " + "btn"}
    >
      {children}
      READ MORE
    </button>
  );
}

export default SecondaryButton;
