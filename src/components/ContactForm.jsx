import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const serviceID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID     = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
    }, userID)
    .then(() => {
      setSubmitted(true);
      setError(null);
      setFormData({ user_name: '', user_email: '', message: '' });
    })
    .catch((err) => {
      setError('Message failed to send. Please try again or email directly.');
      console.error(err);
    })
    .finally(() => setSending(false));
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'var(--bg-raised)',
    border: '1px solid var(--border-bright)',
    borderRadius: 'var(--radius)',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.62rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--amber)',
    marginBottom: '0.4rem',
  };

  return (
    <div>
      <p className="section-eyebrow">Get In Touch</p>
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Open to the right opportunity. Direct line: &nbsp;
        <a href="mailto:patrick.b.lucas@gmail.com" style={{ color: 'var(--amber)' }}>
          patrick.b.lucas@gmail.com
        </a>
      </p>

      <div style={{ maxWidth: '600px' }}>
        {submitted ? (
          <div className="card" style={{ borderColor: 'var(--amber)', background: 'var(--amber-glow)', textAlign: 'center', padding: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '0.06em', color: 'var(--amber)', marginBottom: '0.5rem' }}>
              Message Sent
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
              I will be in touch shortly.
            </p>
          </div>
        ) : (
          <div className="card fade-up fade-up-1">
            {error && (
              <div style={{ padding: '0.75rem 1rem', background: 'rgba(220,50,50,0.1)', border: '1px solid rgba(220,50,50,0.3)', borderRadius: 'var(--radius)', marginBottom: '1.25rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#f87171' }}>{error}</p>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--amber)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-bright)'; }}
                />
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--amber)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-bright)'; }}
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--amber)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-bright)'; }}
                />
              </div>

              <button
                className="btn-primary"
                onClick={handleSubmit}
                disabled={sending}
                style={{ alignSelf: 'flex-start', opacity: sending ? 0.6 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
