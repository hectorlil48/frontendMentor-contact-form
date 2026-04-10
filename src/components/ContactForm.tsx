import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
};

type FormErrors = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: string;
};

const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: "",
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

    const newErrors: FormErrors = {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: "",
    };

    if (!formData.firstName) newErrors.firstName = "This field is required.";
    if (!formData.lastName) newErrors.lastName = "This field is required.";
    if (!formData.email) {
      newErrors.email = "This field is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.queryType)
      newErrors.queryType = "Please select a query type.";
    if (!formData.message) newErrors.message = "This field is required.";
    if (!formData.consent)
      newErrors.consent =
        "To submit the form, you must consent to being contacted";

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) return;

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
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form__group">
        <label htmlFor="email">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input type="email" id="email" name="email" onChange={handleChange} />
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
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form__group">
        <input
          type="checkbox"
          id="consent"
          name="consent"
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
