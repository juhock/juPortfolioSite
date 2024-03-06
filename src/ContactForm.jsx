import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="allContactForm">
      <div className="contact-container">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="test"
        >
          <input
            type="hidden"
            name="access_key"
            value="5e04e505-ddc6-4f57-8893-16f767395990"
          ></input>
          <h2>Send me a message!</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-inputs"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-inputs"
            required
          ></input>
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-inputs"
            required
          ></textarea>
          <button type="submit" id="submitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
