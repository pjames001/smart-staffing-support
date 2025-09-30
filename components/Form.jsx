'use client'
import { useState } from "react"

const FloatingInput = ({ label, id, name, type = 'text', value, onChange, isTextArea = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Determine if the label should be in the floating/active position
  const isLabelActive = isFocused || value.length > 0;

  // Conditional Tailwind classes for the label transition
  const labelClasses = `
    absolute left-4 transition-all duration-200 pointer-events-none 
    font-medium text-gray-500
    ${
      isLabelActive
        ? 'top-0 -translate-y-1/2 -translate-x-[20px] bg-white px-1 text-xs text-indigo-600 scale-90'
        : 'top-10 -translate-y-1/2 text-base'
    }
  `;

  // Conditional Tailwind classes for input focus appearance
  const inputBaseClasses = `
    w-full p-4 border rounded-lg appearance-none focus:outline-none 
    transition duration-200 resize-none
    ${isFocused ? 'border-2 border-indigo-600 shadow-md' : 'border-gray-300'}
  `;

  // Determine the input type (textarea or standard input)
  const InputElement = isTextArea ? 'textarea' : 'input';

  return (
    <div className="relative pt-3 mb-6">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={inputBaseClasses}
        rows={isTextArea ? 4 : undefined} // Only apply rows if it's a textarea
      />
    </div>
  );
};

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    // Simulate API call delay
    setTimeout(() => {
        setIsSubmitted(true);
        // Reset form after a successful simulated submission
        setFormData({ name: '', email: '', phone: '', industry: '', subject: '', message: '' }); 
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md w-full">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
          <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="p-8 sm:p-12 max-w-lg w-full">
        <h2 className="text-4xl font-extrabold text-[#0E1F77] mb-6 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          
          <FloatingInput 
            id="name" 
            name="name" 
            label="Your Full Name" 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
          
          <FloatingInput 
            id="email" 
            name="email" 
            label="Email Address" 
            type="email"
            value={formData.email} 
            onChange={handleChange} 
            required
          />

          <FloatingInput 
            id="phone" 
            name="phone" 
            label="Phone Number" 
            type="tel"
            value={formData.phone} 
            onChange={handleChange} 
            required
          />

          <FloatingInput 
            id="industry" 
            name="industry" 
            label="Your Industry" 
            type="text"
            value={formData.industry} 
            onChange={handleChange} 
            required
          />

          <FloatingInput 
            id="subject" 
            name="subject" 
            label="Subject" 
            type="text"
            value={formData.subject} 
            onChange={handleChange} 
            required
          />

          <FloatingInput 
            id="message" 
            name="message" 
            label="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required
            isTextArea={true}
          />
          
          <button 
            type="submit" 
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-lg mt-4 disabled:opacity-50"
            disabled={!formData.name || !formData.email || !formData.message}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form