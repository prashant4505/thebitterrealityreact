import '../css/ContactUs.css';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className="container">
      {/* Contact Us Header */}
      <h1>Contact Us</h1>
      <p><em>Got something to say? We’d love to hear from you!</em></p>

      {/* Contact Form */}
      <form action="#" method="POST" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
        </div>

        {/* Description Field */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
