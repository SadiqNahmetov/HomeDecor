import React, { useEffect } from "react";
import changeTitle from "../../helpers/Change";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactContent from "../../components/ContactContent";
import Title from "../../components/Title";

function Contact() {
  useEffect(() => {
    changeTitle("Contact");
  }, []);
  return (
    <main>
      <Breadcrumbs />
      <Title title="CONTACT" />
      <ContactContent />
    </main>
  );
}

export default Contact;
