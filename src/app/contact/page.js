'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, fullName, email, message } = formData;
    const recipient = 'VAHETAMINDKOHE'; // pane siia actual email.
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`From: ${fullName} (${email})\n\n${message}`);
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div id='contact' className="min-h-screen flex items-center justify-center bg-base-100 py-16">
      <div className="bg-accent p-8 rounded-lg shadow-md w-full max-w-4xl xl:max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-center font-['thedusWLB'] text-accent">Kontakt</h2>
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left text column */}
          <div className="p-6">
            <h3 className="text-4xl font-['thedusWLB'] text-primary mb-4">Küsimusi? Kirjuta meile julgelt!</h3>
            <p className="font-['thedusCLR'] text-lg text-primary">Kui teil on küsimusi või soovite pakkumist, siis täitke allolev vorm ja saadame teile vastuse võimalikult kiiresti.</p>
          </div>

          {/* Right form column (styled like site boxes) */}
          <div className="bg-base-100 rounded-xl p-6 xl:p-8 shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-accent font-medium mb-2 font-['thedusCLR']">Pealkiri</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-secondary rounded-md font-['thedusCLR'] focus:outline-none focus:ring-4 focus:ring-accent bg-base-100 text-accent placeholder:text-neutral-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-accent font-medium mb-2 font-['thedusCLR']">Täisnimi</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-secondary rounded-md font-['thedusCLR'] focus:outline-none focus:ring-4 focus:ring-accent bg-base-100 text-accent placeholder:text-neutral-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-accent font-medium mb-2 font-['thedusCLR']">E-posti aadress</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-4 focus:ring-accent font-['thedusCLR'] bg-base-100 text-accent placeholder:text-neutral-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-accent font-medium mb-2 font-['thedusCLR']">Sõnumi sisu</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-4 font-['thedusCLR'] focus:ring-accent bg-base-100 text-accent placeholder:text-neutral-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-secondary w-full min-h-[50px] border-0 text-primary font-['thedusCLR'] font-['thedusCLR'] text-2xl pb-2 duration-300 ease-in-out hover:bg-primary hover:text-secondary hover:border-2 hover:border-secondary"
              >
                Saada
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
