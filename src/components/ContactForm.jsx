import { useState } from "react";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <form className="ContactForm">
      <p>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={data.message}
          onChange={handleChange}
        />
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default ContactForm;
