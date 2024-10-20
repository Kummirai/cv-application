import "./nameSection.css";
import { useState } from "react";

const NameSection = () => {
  const [name, setName] = useState("");

  const onChange = (change) => {
    setName(change.target.value);
    console.log(name);
  };

  return (
    <div className="name-section">
      <form id="myForm">
        <legend>
          <h2 className="sub-heading">Name Section</h2>
        </legend>
        <fieldset className="name-info">
          <div>
            <label htmlFor="name">Fisrt Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First Name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="lastame">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
            />
          </div>
        </fieldset>
        <legend className="contact-info">Contact Information</legend>
        <fieldset className="name-info">
          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Job title"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="someone@somehwere.com"
            />
          </div>
        </fieldset>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default NameSection;
