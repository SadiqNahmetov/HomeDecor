import React from "react";
import classes from "./contact.module.scss";
import ButtonPrimary from "../PrimaryButton";
import Title from "../Title";

function ContactContent() {
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
              <img
                src="https://s3-alpha-sig.figma.com/img/1a81/6eed/44a385856238ca77ac82ce311e6ee73e?Expires=1693180800&Signature=ok8xdrDTYhbNJ1EtRzNQEH26mwl8otpMi3kmUgkWPiHpqQn8ooglXsSDzwl3hHoG1JNBf16MedlYhz02zfdjIs0KsAzXS8Rdx0VHkMbxdIe~Y8k2o55TfUj6o5g9zV5tp12v-lSZiiMyegnv2J5909UqT4IKATfb8Gvovax0yyiK~3FCBPDHr6o5CmrMnqg~ErocnCEsC3wtMkzAmZjjw2KoJgrMRL47VJUrB~ilrE1Tou~IxGTHi9POkcA-1ugNAvLMspn7yxJO8ULsD3eKDuv4U5wAz4mytX71oGqffdr9jUWHm7L2h~XQIayIr5Lu~3qjErqesVEpGnI2y0b3WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactContent;



