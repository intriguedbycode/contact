import React, { Component } from "react";

export default function ContactForm() {
  return (
    <div className="container mt-4">
      <h1>Contact Us!</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            required
          ></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            required
          ></input>
        </div>
        <div className="col-md-8">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
          ></input>
        </div>
        <div className="col-md-4">
          <label htmlFor="number" className="form-label">
            cell
          </label>
          <input
            type="tel"
            placeholder="+1 (443)-123-4567"
            className="form-control"
            id="cell"
          ></input>
        </div>
        <div className="col-md-8">
          <label htmlFor="address" className="form-label">
            Street Address
          </label>
          <input
            type="text"
            placeholder="optional"
            className="form-control"
            id="address"
          ></input>
        </div>
        <div className="col-md-2">
          <label htmlFor="zip" className="form-label">
            Zip Code
          </label>
          <input type="number" className="form-control" id="zip"></input>
        </div>
        <div className="col-md-2">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input type="text" className="form-control" id="state" />
        </div>
        <div className="col-md-12">
          <label htmlFor="questions" className="form-label">
            Questions/Comments
          </label>
          <textarea className="form-control" id="comments" rows="5"></textarea>
        </div>
        <div className="col-md-12 mt-3">
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
