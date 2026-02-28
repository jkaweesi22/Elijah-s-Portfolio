"use client";

import { FormEvent } from "react";

interface ContactFormProps {
  email: string;
  formLabels: {
    name: string;
    email: string;
    project: string;
    submit: string;
  };
}

export function ContactForm({ email, formLabels }: ContactFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const userEmail = formData.get("email") as string;
    const body = formData.get("body") as string;
    const mailtoBody = [
      `Name: ${name || "(not provided)"}`,
      `Email: ${userEmail || "(not provided)"}`,
      "",
      "Message:",
      body,
    ].join("\n");
    window.location.href = `mailto:${email}?subject=Portfolio%20Inquiry&body=${encodeURIComponent(mailtoBody)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground"
        >
          {formLabels.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          {formLabels.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          {formLabels.project}
        </label>
        <textarea
          id="message"
          name="body"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto rounded-xl bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-secondary transition-colors"
      >
        {formLabels.submit}
      </button>
    </form>
  );
}
