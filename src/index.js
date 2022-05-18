import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import ContactForm from "./form";
import Footer from "./footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactForm />
    <Footer />
  </React.StrictMode>
);
