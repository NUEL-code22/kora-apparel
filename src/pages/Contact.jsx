import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section className="contact-page">
      <div className="page-header">
        <h2>Contact Us</h2>
        <p>Have a question about sizing, custom orders, or delivery? Reach out below.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Store & Studio Details</h3>
          <p><strong>Email:</strong> hello@koraapparel.example.com</p>
          <p><strong>Telephone:</strong> +234 800 555 0199</p>
          <p><strong>Studio Address:</strong> 14 Bodija Estate, Ibadan, Oyo State</p>
          <p><strong>Hours:</strong> Mon – Sat, 9:00 AM – 6:00 PM</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {submitted && (
            <div className="success-banner">
              Thank you! Your message has been received. Our team will reply shortly.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Amina Yusuf"
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. amina@example.com"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Order Inquiry / Custom Fitting"
            />
            {errors.subject && <span className="error-text">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;