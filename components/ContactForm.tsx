'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Client-side no-op stub per ADR-004/K4 — no real form backend in scope.
        console.log('Contact form submitted (stub, no backend wired)');
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Name *"
            className="w-full border border-tint-light rounded px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your Email *"
            className="w-full border border-tint-light rounded px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="sr-only">Your Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Your Subject"
          className="w-full border border-tint-light rounded px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Your message</label>
        <textarea
          id="message"
          name="message"
          rows={10}
          placeholder="Your message"
          className="w-full border border-tint-light rounded px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
      </div>
      <p className="text-xs text-text-muted">
        This site is protected by reCAPTCHA and the Google{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-primary"
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-primary"
        >
          Terms of Service
        </a>{' '}
        apply.
      </p>
      <div className="text-center">
        <button type="submit" className="btn-theme font-montserrat bg-primary text-white">
          Send Message
        </button>
      </div>
      {sent && (
        <p role="status" className="text-accent-green text-sm text-center">
          Message sent (demo only — no backend wired).
        </p>
      )}
    </form>
  );
}
