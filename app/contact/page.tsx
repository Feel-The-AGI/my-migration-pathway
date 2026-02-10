"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:mymigrationpathway@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-spacing bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <p className="small-label">Contact Us</p>
              <h1 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                Get in touch with us.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-slate sm:text-base">
                Have questions about studying or working abroad? Reach out through any of the channels below and our team will respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="section-spacing">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              {/* Form */}
              <div className="card p-5 sm:p-8">
                <h2 className="font-serif text-xl sm:text-2xl">Send us a message</h2>
                <p className="mt-2 text-sm text-slate">Fill out the form below and we'll get back to you.</p>

                {submitted ? (
                  <div className="mt-6 rounded-xl bg-green-50 p-6 text-center">
                    <p className="text-sm font-semibold text-green-700">Your email client should open now.</p>
                    <p className="mt-2 text-xs text-green-600">If it didn't, email us directly at mymigrationpathway@gmail.com</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-charcoal">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-charcoal/15 bg-warmwhite px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-deepolive focus:ring-1 focus:ring-deepolive"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-charcoal">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-1 w-full rounded-lg border border-charcoal/15 bg-warmwhite px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-deepolive focus:ring-1 focus:ring-deepolive"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="text-sm font-medium text-charcoal">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-1 w-full rounded-lg border border-charcoal/15 bg-warmwhite px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-deepolive focus:ring-1 focus:ring-deepolive"
                          placeholder="0544764112"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-charcoal">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1 w-full resize-none rounded-lg border border-charcoal/15 bg-warmwhite px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-deepolive focus:ring-1 focus:ring-deepolive"
                        placeholder="Tell us about your goals or ask a question..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-deepolive px-6 py-3 text-sm font-semibold text-white transition hover:bg-deepolive/90 sm:w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="card p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-charcoal/5 text-charcoal">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Phone Numbers</p>
                      <a href="tel:+233544764112" className="mt-1 block text-sm text-slate hover:text-charcoal">0544764112</a>
                      <a href="tel:+233204115667" className="block text-sm text-slate hover:text-charcoal">0204115667</a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="card p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">WhatsApp</p>
                      <a
                        href="https://whatsapp.com/channel/0029Vb8CWnkGU3BFQ3uq7W1H"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 rounded-full bg-green-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-green-700"
                      >
                        Chat Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="card p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-charcoal/5 text-charcoal">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Email Address</p>
                      <a href="mailto:mymigrationpathway@gmail.com" className="mt-1 block break-all text-sm text-slate hover:text-charcoal">
                        mymigrationpathway@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Address */}
                <div className="card p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-charcoal/5 text-charcoal">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Office Address</p>
                      <p className="mt-1 text-sm text-slate">47 Nungua Link Road, Second Floor</p>
                      <p className="text-sm text-slate">Baatsona Spintex Road, Accra, Ghana</p>
                      <p className="mt-1 text-xs text-slate">GPS: GA-414-0365</p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="card p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-charcoal/5 text-charcoal">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Office Hours</p>
                      <p className="mt-1 text-sm text-slate">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                      <p className="text-sm text-slate">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="section-spacing bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 text-center sm:mb-12">
              <p className="small-label">Find Us</p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">Our Office Location</h2>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9!2d-0.113!3d5.635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGA-414-0365!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                className="h-64 w-full sm:h-80 md:h-96"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Migration Pathway Office Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
