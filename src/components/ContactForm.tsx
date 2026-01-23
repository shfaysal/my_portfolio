"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      setErrorMessage("");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error || "Request failed");
      }

      setForm(initialState);
      setStatus("success");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      setErrorMessage(message);
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Email</span>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea
          className="input textarea"
          name="message"
          placeholder="Tell me about your project or role."
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>
      <label className="sr-only" aria-hidden="true">
        Company
        <input
          className="input"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={handleChange}
        />
      </label>
      <div className="form-actions">
        <button className="btn primary" type="submit">
          {status === "loading" ? "Sending..." : "Send message"}
        </button>
        <span className="form-status" aria-live="polite">
          {status === "success" && "Message sent. I will reply soon."}
          {status === "error" &&
            (errorMessage || "Something went wrong. Try again.")}
        </span>
      </div>
    </form>
  );
}
