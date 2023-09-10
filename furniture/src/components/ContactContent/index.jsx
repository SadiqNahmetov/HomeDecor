import React, {useEffect, useState} from "react";
import classes from "./contact.module.scss";
import ButtonPrimary from "../PrimaryButton";
import Title from "../Title";
import ContactService from "../../APIs/services/ContactService";


function ContactContent() {
  const [contact, setContact] = useState("");

  const GetAllContact = async () => {
    setContact(await ContactService.GetAll());
  };

  useEffect(() => {
    GetAllContact();
  }, "");
  return (
    <section className={classes.contact__section}>
      <div className={classes["contact"]}>
        <div className="container">
          <div className={classes["contact--item"]}>
            <Title title="CONTACT" />
          </div>
          <div className={classes["contact__main"]}>
            <div className={classes["contact__input"]}>
              <form action="">
                <input
                  className={classes["contact__input--item"]}
                  type="text"
                  placeholder="NAME, SURNAME"
                />
                <input
                  className={classes["contact__input--item"]}
                  type="email"
                  placeholder="E-MAIL ADRESS"
                />
                <input
                  className={classes["contact__input--item"]}
                  type="text"
                  placeholder="THEME"
                />
                <textarea
                  className={classes["contact__input--text"]}
                  type="text"
                  placeholder="YOUR MESSAGE"
                />
                <div className={classes["contact__button"]}>
                  <ButtonPrimary children={"Submit"} />
                </div>
              </form>
            </div>
            <div className={classes["contact__img"]}>
            <img src={contact.image} alt="contactImage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactContent;



