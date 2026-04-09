import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
};

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    queryType: "",
    consent: false,
  });

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : false;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>

      <div className="form__row">
        <div className="form__group">
          <label htmlFor="firstName">
            First Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form__group">
          <label htmlFor="lastName">
            Last Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form__group">
        <label htmlFor="email">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
        />
      </div>

      <fieldset>
        <legend>
          Query Type <span aria-hidden="true">*</span>
        </legend>
        <div className="form__radio-group">
          <label>
            <input
              type="radio"
              name="queryType"
              value="general"
              required
              onChange={handleChange}
            />
            General Enquiry
          </label>
          <label>
            <input
              type="radio"
              name="queryType"
              value="support"
              onChange={handleChange}
            />
            Support Request
          </label>
        </div>
      </fieldset>

      <div className="form__group">
        <label htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form__group">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          onChange={handleChange}
        />
        <label htmlFor="consent">
          I consent to being contacted by the team{" "}
          <span aria-hidden="true">*</span>
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
