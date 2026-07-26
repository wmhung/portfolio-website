import { useState } from "react";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Fill these in with your real links.
const GITHUB = "https://github.com/your-username";
const LINKEDIN = "https://www.linkedin.com/in/your-handle";
const EMAIL = "brucewmhung@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // {ok, text}
  const [sending, setSending] = useState(false);

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // Front-end validation (mirrors the back end).
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) errs.email = "That email looks invalid.";
    if (!form.message.trim()) errs.message = "Please enter a message.";
    else if (form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus({ ok: true, text: data.message });
        setForm({ name: "", email: "", message: "" });
      } else {
        setErrors(data.errors || {});
        setStatus({ ok: false, text: "Please fix the errors above." });
      }
    } catch {
      setStatus({ ok: false, text: "Could not reach the server. Try again later." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="reveal">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">Contact</h2>
          <p className="lead">
            Have a role or a question? Send a message — the form is validated on
            both the front end and my Flask API.
          </p>
        </div>

        <div className="contact-wrap" style={{ marginTop: "40px" }}>
          <form className="reveal" onSubmit={onSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" value={form.name} onChange={update("name")} />
              {errors.name && <div className="err">{errors.name}</div>}
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" value={form.email} onChange={update("email")} />
              {errors.email && <div className="err">{errors.email}</div>}
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={update("message")}
              />
              {errors.message && <div className="err">{errors.message}</div>}
            </div>
            <button className="btn btn-solid" type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send message"}
            </button>
            {status && (
              <div className={`form-status ${status.ok ? "ok" : ""}`}>
                {status.text}
              </div>
            )}
          </form>

          <div className="contact-side reveal">
            <h3>Elsewhere</h3>
            <p className="lead" style={{ fontSize: "1rem" }}>
              Prefer email or socials? Reach me directly.
            </p>
            <div className="links">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
