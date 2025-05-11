import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ConnectForm.module.css";
import GlobeBackground from "../../GlobeBg/GlobeBackground";

function ContactForm() {
  const [rotationY, setRotationY] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState(null); // To track success/error messages
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Replace with your actual Public Key
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setRotationY((prev) => prev + 0.1);
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
    <section className={styles["form-section"]}>
      <div className={styles["form-globe-container"]}>
        <div className={styles["globe-wrapper"]}>
          <GlobeBackground rotation={[0, rotationY, 0]} />
        </div>
        <h3>Let&apos;s get in touch</h3>
        <div>
          <form ref={form} onSubmit={sendEmail} className={styles.connectForm}>
            <div className={styles["input-container"]}>
              <label htmlFor="from_name" className={styles["connect-label"]}>
                Name:
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="from_email" className={styles["connect-label"]}>
                Email:
              </label>
              <input
                className={styles["connect-input"]}
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="message" className={styles["connect-label"]}>
                Message:
              </label>
              <textarea
                className={styles["connect-input"]}
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
      </div>

      {submissionStatus === "success" && (
        <p style={{ color: "green" }}>Message sent successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p style={{ color: "red" }}>
          Failed to send message. Please try again.
        </p>
      )}
    </section>
  );
}

export default ContactForm;
