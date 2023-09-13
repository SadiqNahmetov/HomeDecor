import React, { useEffect } from "react";
import changeTitle from "../../utils/Change";
import ContactContent from "../../components/ContactContent";

function Contact() {
  useEffect(() => {
    changeTitle("Contact");
  }, []);
  return (
    <main>
      <ContactContent />
    </main>
  );
}

export default Contact;
