function ContactForm() {
  return (
    <form>
      <h1>Contact Us</h1>

      <div className="form__row">
        <div className="form__group">
          <label htmlFor="firstName">
            First Name <span aria-hidden="true">*</span>
          </label>
          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div className="form__group">
          <label htmlFor="lastName">
            Last Name <span aria-hidden="true">*</span>
          </label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
      </div>

      <div className="form__group">
        <label htmlFor="email">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input type="email" id="email" name="email" required />
      </div>

      <fieldset>
        <legend>
          Query Type <span aria-hidden="true">*</span>
        </legend>
        <div className="form__radio-group">
          <label>
            <input type="radio" name="queryType" value="general" required />
            General Enquiry
          </label>
          <label>
            <input type="radio" name="queryType" value="support" />
            Support Request
          </label>
        </div>
      </fieldset>
    </form>
  );
}

export default ContactForm;
