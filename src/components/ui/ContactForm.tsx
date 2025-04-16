import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setLoading(true);
    setError('');
    setSuccess(false);
    
    try {
      // Replace with your actual form submission logic
      // This is a mock submission with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock successful submission
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-dark-lighter rounded border-0 py-3 px-4 text-white focus:ring-2 focus:ring-primary outline-none"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-dark-lighter rounded border-0 py-3 px-4 text-white focus:ring-2 focus:ring-primary outline-none"
          placeholder="Your email"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-dark-lighter rounded border-0 py-3 px-4 text-white focus:ring-2 focus:ring-primary outline-none resize-none"
          placeholder="Your message"
        />
      </div>
      
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">Message sent successfully!</p>}
      
      <Button 
        type="submit" 
        variant="primary" 
        disabled={loading}
        className="w-full sm:w-auto"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;