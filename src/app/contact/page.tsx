"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Reach out with any questions or feedback, or connect with us on our YouTube channel!
      </p>

      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">Or connect with us directly on:</p>
          <p className="text-gray-800 font-semibold">Email:ambreenarshad345@gmail.com</p>
          <a
            href="https://www.youtube.com/@QAZ3456"
            className="text-blue-600 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Channel
          </a>
        </div>

        <div className="mt-8">
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
            Map Location Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
