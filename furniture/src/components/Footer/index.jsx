import React from "react";
import classes from "./footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={classes.footer}>
          <div className={classes["footer__logo--copyrigt"]}>
            <p>HomeDecor</p>
            <span>©2023 All Right Reserved. Developed by Webcoder Agency</span>
          </div>
          <div className={classes["footer__text"]}>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui{" "}
            </p>
          </div>
          <div className={classes["footer__contact"]}>
            <span className={classes["phone"]}>+994 50 555 55 55</span>
            <span className={classes["gmail"]}>youremailhere@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
