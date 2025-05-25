import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Replace these with your EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_k1gkmza',
        'template_q3rbzwn',
        templateParams,
        'b3oqlSNgUCBHc5Pnw'
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section bg-dark-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary text-center mb-8">
            Contact Me
          </h1>
          <p className="text-light/80 text-center mb-8">
            Have questions about my tutoring services? Send me a message and I'll
            get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-light mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-dark border border-primary/20 text-light focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-light mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-dark border border-primary/20 text-light focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-light mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-dark border border-primary/20 text-light focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-light mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 rounded-md bg-dark border border-primary/20 text-light focus:outline-none focus:border-primary"
              ></textarea>
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-md ${
                  status.type === 'success'
                    ? 'bg-green-500/20 text-green-500'
                    : status.type === 'error'
                    ? 'bg-red-500/20 text-red-500'
                    : 'bg-primary/20 text-primary'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full btn btn-primary"
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
              <p className="text-light/80">eduglowr.gmail.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
              <p className="text-light/80">+251 902 471 446</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 