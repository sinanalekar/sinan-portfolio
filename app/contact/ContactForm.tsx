"use client";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    setDraft("");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as {
        message?: string;
        mailto?: string;
      };
      if (!response.ok || !result.mailto)
        throw new Error(result.message || "Please try again.");
      setDraft(result.mailto);
      setStatus(
        "Your message is ready. Open the draft in your email app to send it.",
      );
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to prepare your message.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <form
      className="form"
      onSubmit={submit}
      onChange={() => {
        setDraft("");
        setStatus("");
      }}
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            minLength={2}
            maxLength={80}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={160}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="company">Company or organization</label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            maxLength={120}
          />
        </div>
        <div className="field">
          <label htmlFor="purpose">Purpose</label>
          <select id="purpose" name="purpose" defaultValue="Opportunity">
            <option>Opportunity</option>
            <option>Project collaboration</option>
            <option>Technical discussion</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          minLength={3}
          maxLength={140}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          minLength={20}
          maxLength={3000}
          required
        />
      </div>
      <div
        className="field"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      >
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="actions">
        <button className="button" type="submit" disabled={busy}>
          {busy ? "Preparing…" : "Prepare email"}
        </button>
        {draft && (
          <a className="button primary" href={draft}>
            Open email draft ↗
          </a>
        )}
      </div>
      <p className="form-status" role="status">
        {status ||
          "Prepare a draft, then send it from your email app. Nothing is stored on this site."}
      </p>
    </form>
  );
}
