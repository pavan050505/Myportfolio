import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import linkedInIcon from '../assets/linkedIn.png'
import twitterIcon from '../assets/twitter.png'

export default function Contact() {
  const form = useRef()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_rxati2v",
        "template_h18fuk9",
        form.current,
        "VdzZIy5u7mlXSkgpy"
      )
      .then(
        () => {
          setSubmitted(true)
          setError(false)
          e.target.reset()
          setTimeout(() => setSubmitted(false), 5000)
        },
        (error) => {
          console.error(error)
          setError(true)
          setSubmitted(false)
        }
      )
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-grid">
          <div className="contact-left">
            <h3 className="contact-heading">Let’s talk on your great project together</h3>
            <p className="contact-sub">I’m open to freelance work and full‑time opportunities. Send a message and I’ll reply soon.</p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon email">
                  <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Email" />
                </div>
                <div className="method-text">
                  <div className="method-title">Email</div>
                  <div className="method-value">pavanbhosle1616@gmail.com</div>
                </div>
                <a className="method-action" href="https://mail.google.com/mail/?view=cm&fs=1&to=pavanbhosle1616@gmail.com" target="_blank" rel="noopener noreferrer">
                  <span>Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h13M12 5l7 7-7 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              <div className="contact-method" aria-label="Instagram">
                <div className="method-icon instagram">
                  <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" />
                </div>
                <div className="method-text">
                  <div className="method-title">Instagram</div>
                  <div className="method-value">@pavanbhosle</div>
                </div>
                <a className="method-action" href="https://www.instagram.com/pavan_bhosle_05/" aria-label="Open Instagram" target="_blank" rel="noopener noreferrer">
                  <span>Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h13M12 5l7 7-7 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <img src="https://cdn.simpleicons.org/whatsapp/00E676" alt="WhatsApp" />
                </div>
                <div className="method-text">
                  <div className="method-title">WhatsApp</div>
                  <div className="method-value">+91 9511669252</div>
                </div>
                <a className="method-action" href="https://wa.me/919511669252">
                  <span>Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h13M12 5l7 7-7 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/pavan050505" aria-label="GitHub" className="contact-social" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.simpleicons.org/github/ffffff?viewbox=auto" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/pavan-bhosle-877b9624b/" aria-label="LinkedIn" className="contact-social" target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/pavan_bhosle_05/" aria-label="Instagram" className="contact-social" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" />
              </a>
              <a href="https://x.com/PavanBhosle005" aria-label="Twitter" className="contact-social" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              {submitted && (
                <div className="contact-success">Thanks — your message was received.</div>
              )}
              {error && (
                <div className="contact-success" style={{ borderColor: 'rgba(239, 68, 68, 0.35)', background: 'rgba(239, 68, 68, 0.14)', color: '#f87171' }}>Failed to send message. Please try again.</div>
              )}
              <div className="contact-field">
                <label htmlFor="name">Your full name</label>
                <input id="name" name="name" required className="contact-input" />
              </div>
              <div className="contact-field">
                <label htmlFor="email">Your email</label>
                <input id="email" name="email" type="email" required className="contact-input" />
              </div>
              <div className="contact-field">
                <label htmlFor="message">Your message</label>
                <textarea id="message" name="message" rows="6" required className="contact-input contact-textarea" />
              </div>
              <button type="submit" className="contact-send">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 11l18-8-8 18-2-7-7-3z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Send Now</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
