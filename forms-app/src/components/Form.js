import { useState } from "react";

export default function FormComponent() {
  // console.log(useState('hello'))
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //slice of state, is an invocation of the useState function

  const [errors, setErrors] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!emailRegex.test(email))
      errors.push("Please enter a valid email address");
    if (!phoneRegex.test(phone))
      errors.push("Phone number must be formatted like (123)456-7890");

    setErrors(errors);
  };

  return (
    <div className="Form">
      <h2> Fill out Form</h2>
      <form onSubmit={onSubmit} className="form">
        {errors.length && (
          <div>
            <p>The following errors arose:</p>
            <ul>
              {errors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <label>Name</label>
        <input className="nameInput" type="name"></input>
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="emailInput"
          type="email"
        ></input>
        <label>Phone Number</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="phoneNumberInput"
        ></input>
        <label>Phone Number Type</label>
        <select name="phoneNumberType" id="phone-number-type-select">
          <option value="">Please choose an Phone Number Type</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
        <label>Other</label>
        <input type="radio" value="Other" name="gender" /> Student
        <input type="radio" value="Other" name="gender" /> Instructor
        <label>Bio</label>
        <textarea></textarea>
        <label>Check to recieve Emails</label>
        <input type="checkbox"></input>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}


