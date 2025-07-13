import { useState } from "react";
import "./ContactUs.css";
import contactUsGraphics from "/contactUs_graphics.png";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear field error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If valid, submit the form manually
    e.target.submit();
  };

  return (
    <div className="contactUs" id="contactUs">
      <div className="contactUsTitle">Contact Us</div>
      <div className="moreinfo">
        For more information and to stay updated on our activities, follow us on
        our social media channels as well.
        <br />
        Email : <a className="specialLinks" href="mailto:kecktm.it.club@gmail.com">
          kecktm.it.club@gmail.com </a>
        <br />
        Follow us on{" "}
        <a
  className="specialLinks"
  href="https://www.facebook.com/kecitclub/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "#1877F2", fontWeight: "bold", textDecoration: "none" }}
>
  Facebook
</a>{" "}
and{" "}
<a
  className="specialLinks"
  href="https://www.instagram.com/kecitclub/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "#E1306C", fontWeight: "bold", textDecoration: "none" }}
>
  Instagram
</a>

        .
      </div>
      <div className="contactUsContent">
        <form
          className="parallaxEl"
          id="formContent"
          action="https://formcarry.com/s/lkVSZ-RGqK0"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form_text formElement">
            <input
              placeholder=" "
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Your Name</label>
            {errors.name && <div className="formError">{errors.name}</div>}
          </div>

          <div className="form_email formElement">
            <input
              placeholder=" "
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Your Email</label>
            {errors.email && <div className="formError">{errors.email}</div>}
          </div>

          <div className="form_message formElement">
            <textarea
              placeholder=" "
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="message">Message to send</label>
            {errors.message && <div className="formError">{errors.message}</div>}
          </div>

          <button type="submit" id="send">
            Send
          </button>
        </form>

        <img
          className="parallaxEl"
          src={contactUsGraphics}
          alt="Contact Us graphics"
          data-lerp={-8}
        />
      </div>
    </div>
  );
}
