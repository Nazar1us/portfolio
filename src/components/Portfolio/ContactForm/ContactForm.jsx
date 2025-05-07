import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // To track success/error messages

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Replace with your actual Public Key
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSubmissionStatus("success");
          setFormData({ from_name: "", from_email: "", message: "" }); // Clear the form
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmissionStatus("error");
        }
      );
  };

  return (
    <div>
      {submissionStatus === "success" && (
        <p style={{ color: "green" }}>Message sent successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p style={{ color: "red" }}>
          Failed to send message. Please try again.
        </p>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="from_name">Name:</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="from_email">Email:</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
