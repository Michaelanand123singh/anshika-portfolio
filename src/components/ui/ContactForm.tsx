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
  
  // Replace with your WhatsApp number including country code
  // Example: 911234567890 for India number +91 12345 67890
  const whatsappNumber = '+91 '; 
  
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
      // Create a message for WhatsApp with proper formatting
      const message = `*Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
      
      // Create WhatsApp API URL - note we're using direct encoding instead of encodeURIComponent
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      // Mark as successful
      setSuccess(true);
      
      // Short delay before redirect so user sees success message
      setTimeout(() => {
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        setFormData({ name: '', email: '', message: '' });
      }, 500);
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
      {success && <p className="text-green-500 text-sm">Redirecting to WhatsApp...</p>}
      
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