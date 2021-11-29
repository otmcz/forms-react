
export default function FormComponent(){
  return (
    <div className="Form">
      <h2> Fill out Form</h2>
      <form className='form'>
        <label>Name</label>
        <input className='nameInput' type='name' required></input>
        <label>Email</label>
        <input className='emailInput' type='email' required></input>
        <label>Phone Number</label>
        <input className='phoneNumberInput' required></input>

        <label>Phone Number Type</label>
        <select name="phoneNumberType" id="phone-number-type-select">
        <option value="">Please choose an Phone Number Type</option>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Mobile">Mobile</option>
        </select>
        <label>Other</label>
        <input type="radio" value="Other" name="gender" required/>

        <label>Bio</label>
        <textarea>
          required
        </textarea>

        <label>Check to recieve Emails</label>
        <input type="checkbox" required></input>
        <button className='submit' required>Submit</button>
      </form>
    </div>

  )
}
