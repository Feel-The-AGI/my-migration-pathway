const stats = [
  { value: "98%", label: "Visa success rate" },
  { value: "99.6%", label: "Student satisfaction" },
  { value: "40+", label: "UK university partners" }
];

const socials = [
  { name: "TikTok", href: "https://www.tiktok.com/@migrationpathway", icon: "tiktok" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61587483507405", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/mymigrationpathway/", icon: "instagram" }
];

const fullServices = [
  "Free one-to-one admission counselling",
  "Guaranteed Scholarships",
  "Fast application processing",
  "Quick offer letters",
  "Internal English test",
  "Personal statement writing guidance",
  "Credibility and visa interview guidance",
  "Visa application assistance",
  "Accommodation arrangement",
  "Airport pick up",
  "Career guidance"
];

const services = [
  {
    title: "Education Services",
    description:
      "Free admission counselling, school selection, scholarship guidance, and full application support to place you into universities abroad."
  },
  {
    title: "Migration Services",
    description:
      "Comprehensive visa guidance, document review, interview coaching, and compliance checks to maximize your approval chances."
  },
  {
    title: "Settlement Support",
    description:
      "Accommodation arrangement, airport pick-up, and career guidance to help you settle into your new destination smoothly."
  }
];

const steps = [
  {
    title: "Discovery Call",
    description: "We listen to your goals, timeline, and budget so we can recommend the right route."
  },
  {
    title: "Pathway Plan",
    description: "We match you with programs, employers, or schools that fit your profile."
  },
  {
    title: "Preparation",
    description: "We organize documents, prepare applications, and coach you for interviews."
  },
  {
    title: "Departure Support",
    description: "We stay with you through approvals, travel planning, and next‑step guidance."
  }
];

const testimonials = [
  {
    quote:
      "Migration Pathway handled every step. I felt confident going into my visa interview and got approved the first time.",
    name: "Abigail Mensah",
    detail: "Toronto, Canada"
  },
  {
    quote:
      "They were honest about what was possible and helped me choose a realistic study program. I’m now enrolled abroad.",
    name: "Kwame Ofori",
    detail: "Birmingham, UK"
  }
];

const faqs = [
  {
    question: "Do you guarantee visa approval?",
    answer:
      "No agency can guarantee approval. We focus on readiness, compliance, and honest guidance to maximize your chances."
  },
  {
    question: "How long does the process take?",
    answer:
      "Timelines vary by country and pathway. Most study and work routes take 2–6 months depending on documentation."
  },
  {
    question: "Can you help with document reviews only?",
    answer:
      "Yes. We offer stand‑alone document checks and interview preparation for clients who need targeted support."
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="section-spacing">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="flex flex-col gap-8">
            <p className="small-label">Migration Pathway · Ghana</p>
            <h1 className="font-serif text-4xl leading-tight text-charcoal md:text-6xl">
              Your pathway to study or work abroad starts here.
            </h1>
            <p className="max-w-2xl text-lg text-slate md:text-xl">
              We help students and professionals in Ghana access verified schools and global
              employers with honest guidance, visa readiness, and step‑by‑step support.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="rounded-full bg-deepolive px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-charcoal"
                href="https://wa.me/233302245205">
                Chat on WhatsApp
              </a>
              <a
                className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-charcoal"
                href="#consultation"
              >
                Book a consultation
              </a>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card p-6">
                <p className="text-3xl font-semibold text-deepolive">{stat.value}</p>
                <p className="mt-2 text-sm text-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="section-spacing bg-white" id="services">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4">
            <p className="small-label">Services</p>
            <h2 className="font-serif text-3xl md:text-4xl">
              A tailored migration plan for every stage.
            </h2>
            <p className="max-w-2xl text-slate">
              We focus on clarity, compliance, and outcomes. No vague promises—just a practical
              route to your next opportunity.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="card p-6">
                <h3 className="text-xl font-semibold text-charcoal">{service.title}</h3>
                <p className="mt-3 text-sm text-slate">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row">
          <div className="flex-1">
            <p className="small-label">Our process</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Clear steps. Zero confusion.
            </h2>
            <p className="mt-4 text-slate">
              Every client receives a structured pathway plan, transparent timelines, and a
              checklist for what comes next.
            </p>
            <div className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mutedgold/20 text-sm font-semibold text-deepolive">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="gradient-border rounded-3xl p-8">
              <p className="small-label">Destinations</p>
              <h3 className="mt-4 font-serif text-2xl">Global options, Ghana‑ready guidance.</h3>
              <p className="mt-4 text-sm text-slate">
                We focus on routes that match your profile—UK, Canada, Germany, USA, and trusted
                emerging destinations for both study and work.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-charcoal">
                <li>United Kingdom</li>
                <li>Canada</li>
                <li>United States</li>
                <li>Germany</li>
                <li>Poland</li>
                <li>Australia</li>
              </ul>
              <div className="mt-8 rounded-2xl bg-white p-6 shadow-soft">
                <p className="text-sm text-slate">Trusted guidance means:</p>
                <ul className="mt-3 space-y-2 text-sm text-charcoal">
                  <li>• Transparent eligibility checks</li>
                  <li>• Document readiness audits</li>
                  <li>• Interview prep and coaching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4">
            <p className="small-label">Success stories</p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Families trust us with their future.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card p-8">
                <p className="text-base text-charcoal">“{testimonial.quote}”</p>
                <p className="mt-6 text-sm font-semibold text-charcoal">
                  {testimonial.name}
                </p>
                <p className="text-xs text-slate">{testimonial.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing" id="about">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="small-label">About us</p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">A global leader in education & migration.</h2>
              <p className="mt-6 text-slate">
                Migration Pathway is a global leader in counselling and providing full application support to place international students into universities abroad.
              </p>
              <p className="mt-4 text-slate">
                Our consultants are former international students who experienced the difficulties and opportunities UK higher education provides. They come from a variety of nationalities and have been trained by our trusted university partners.
              </p>
              <p className="mt-4 text-slate">
                We represent 40+ UK higher education institutions with a 98% visa success rate and 99.6% student satisfaction rate. Our consultants speak 20 different languages across our global offices.
              </p>
            </div>
            <div className="gradient-border rounded-3xl p-8">
              <p className="small-label">What we provide</p>
              <h3 className="mt-4 font-serif text-2xl">Comprehensive support services</h3>
              <ul className="mt-6 grid gap-3 text-sm text-charcoal">
                {fullServices.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-deepolive" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-spacing bg-white" id="consultation">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="card grid gap-8 p-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="small-label">Consultation</p>
              <h2 className="mt-4 font-serif text-3xl">Let's design your pathway plan.</h2>
              <p className="mt-4 text-slate">
                Tell us your destination, timeline, and budget. We'll outline the steps and help
                you prepare confidently.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-deepolive px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-charcoal"
                  href="https://wa.me/233302245205">
                  Start a WhatsApp chat
                </a>
                <a
                  className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-charcoal"
                  href="mailto:hello@mymigrationpathway.com"
                >
                  Email the team
                </a>
              </div>
              {/* Social Links */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm text-slate">Follow us:</span>
                <a
                  href="https://www.tiktok.com/@migrationpathway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/5 text-charcoal transition hover:bg-deepolive hover:text-white"
                  aria-label="TikTok"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61587483507405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/5 text-charcoal transition hover:bg-deepolive hover:text-white"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/mymigrationpathway/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/5 text-charcoal transition hover:bg-deepolive hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-6 rounded-2xl bg-warmwhite p-6">
              <div>
                <p className="text-sm font-semibold text-charcoal">Accra Office</p>
                <p className="text-sm text-slate">47 Nungua Link Road, Second Floor</p>
                <p className="text-sm text-slate">Baatsona Spintex Road, Accra, Ghana</p>
                <p className="mt-1 text-xs text-slate">GPS: GA-414-0365</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Office hours</p>
                <p className="text-sm text-slate">Mon–Sat · 9:00am – 6:00pm</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Contact</p>
                <p className="text-sm text-slate">(030) 224-5205</p>
                <p className="text-sm text-slate">(030) 252-7999</p>
                <p className="text-sm text-slate">hello@mymigrationpathway.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4">
            <p className="small-label">FAQ</p>
            <h2 className="font-serif text-3xl md:text-4xl">Answers before you begin.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="text-base font-semibold text-charcoal">{faq.question}</h3>
                <p className="mt-3 text-sm text-slate">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl bg-deepolive px-8 py-12 text-white md:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="small-label text-white/70">Get started</p>
                <h2 className="mt-3 font-serif text-3xl">Ready to take the next step?</h2>
                <p className="mt-3 text-sm text-white/80">
                  A clear pathway begins with one conversation. We respond fast and outline your
                  options clearly.
                </p>
              </div>
              <a
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-deepolive"
                href="https://wa.me/233302245205">
                Chat now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-charcoal/10 py-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <p className="font-semibold text-charcoal">Migration Pathway</p>
              <p className="mt-2 text-sm text-slate">Migration and education services. Your trusted partner for study and work abroad guidance in Ghana.</p>
              <p className="mt-3 text-xs text-slate">47 Nungua Link Road, Baatsona Spintex Road, Accra</p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-semibold text-charcoal">Quick Links</p>
              <a className="text-slate hover:text-charcoal" href="#services">Services</a>
              <a className="text-slate hover:text-charcoal" href="#about">About Us</a>
              <a className="text-slate hover:text-charcoal" href="#consultation">Consultation</a>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-semibold text-charcoal">Contact</p>
              <a className="text-slate hover:text-charcoal" href="tel:+233302245205">(030) 224-5205</a>
              <a className="text-slate hover:text-charcoal" href="tel:+233302527999">(030) 252-7999</a>
              <a className="text-slate hover:text-charcoal" href="mailto:hello@mymigrationpathway.com">hello@mymigrationpathway.com</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-charcoal text-sm">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.tiktok.com/@migrationpathway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 text-slate transition hover:bg-deepolive hover:text-white"
                  aria-label="TikTok"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61587483507405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 text-slate transition hover:bg-deepolive hover:text-white"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/mymigrationpathway/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 text-slate transition hover:bg-deepolive hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-charcoal/10 pt-6 text-center text-xs text-slate">
            <p>© {new Date().getFullYear()} Migration Pathway. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://mymigrationpathway.com/#organization",
            name: "Migration Pathway",
            legalName: "Migration Pathway Ghana",
            url: "https://mymigrationpathway.com",
            logo: {
              "@type": "ImageObject",
              url: "https://mymigrationpathway.com/og-image.png",
              width: 1200,
              height: 630
            },
            image: "https://mymigrationpathway.com/og-image.png",
            description: "Ghana's trusted migration agency helping students and professionals secure study and work opportunities abroad with expert visa guidance and honest support.",
            foundingLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Accra",
                addressCountry: "GH"
              }
            },
            areaServed: [
              { "@type": "Country", name: "Ghana" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Germany" },
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "Poland" }
            ],
            sameAs: [
              "https://www.tiktok.com/@migrationpathway",
              "https://www.facebook.com/profile.php?id=61587483507405",
              "https://www.instagram.com/mymigrationpathway/",
              "https://wa.me/233302245205"
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+233269599999",
                email: "hello@mymigrationpathway.com",
                availableLanguage: ["English"],
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "18:00"
                }
              }
            ]
          })
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://mymigrationpathway.com/#localbusiness",
            name: "Migration Pathway",
            image: "https://mymigrationpathway.com/og-image.png",
            url: "https://mymigrationpathway.com",
            telephone: "+233302245205",
            email: "hello@mymigrationpathway.com",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "47 Nungua Link Road, Second Floor, Baatsona Spintex Road",
              addressLocality: "Accra",
              addressRegion: "Greater Accra",
              addressCountry: "GH"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 5.6037,
              longitude: -0.187
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00"
              }
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "150",
              bestRating: "5",
              worstRating: "1"
            }
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Immigration Consulting",
            provider: {
              "@type": "Organization",
              name: "Migration Pathway",
              url: "https://mymigrationpathway.com"
            },
            areaServed: {
              "@type": "Country",
              name: "Ghana"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Migration Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Study Abroad Services",
                    description: "End-to-end school selection, admissions support, and visa preparation built around your budget and career goals."
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Work Abroad Services",
                    description: "Guidance on global job pathways, employer requirements, and visa documentation to help you relocate with confidence."
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Visa Guidance",
                    description: "Document review, interview coaching, and compliance checks that reduce delays and improve approval outcomes."
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you guarantee visa approval?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No agency can guarantee approval. We focus on readiness, compliance, and honest guidance to maximize your chances."
                }
              },
              {
                "@type": "Question",
                name: "How long does the process take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Timelines vary by country and pathway. Most study and work routes take 2–6 months depending on documentation."
                }
              },
              {
                "@type": "Question",
                name: "Can you help with document reviews only?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We offer stand-alone document checks and interview preparation for clients who need targeted support."
                }
              },
              {
                "@type": "Question",
                name: "Which countries can I migrate to from Ghana?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We specialize in helping Ghanaians migrate to the United Kingdom, Canada, United States, Germany, Poland, and Australia for both study and work opportunities."
                }
              },
              {
                "@type": "Question",
                name: "What is the cost of your migration services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our fees vary depending on the type of service and destination country. Contact us on WhatsApp for a personalized quote based on your specific needs."
                }
              }
            ]
          })
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://mymigrationpathway.com/#webpage",
            url: "https://mymigrationpathway.com",
            name: "Migration Pathway | Study & Work Abroad Guidance in Ghana",
            description: "Ghana's trusted migration agency helping students and professionals secure study and work opportunities abroad with expert visa guidance.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://mymigrationpathway.com/#website",
              url: "https://mymigrationpathway.com",
              name: "Migration Pathway",
              publisher: {
                "@type": "Organization",
                "@id": "https://mymigrationpathway.com/#organization"
              }
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://mymigrationpathway.com/og-image.png"
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://mymigrationpathway.com"
                }
              ]
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".hero-text"]
            }
          })
        }}
      />

      {/* ProfessionalService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Migration Pathway",
            image: "https://mymigrationpathway.com/og-image.png",
            url: "https://mymigrationpathway.com",
            telephone: "+233302245205",
            address: {
              "@type": "PostalAddress",
              streetAddress: "47 Nungua Link Road, Second Floor, Baatsona Spintex Road",
              addressLocality: "Accra",
              addressCountry: "GH"
            },
            knowsAbout: [
              "Student Visa Applications",
              "Work Visa Applications",
              "Immigration Consulting",
              "Study Abroad Programs",
              "International Education",
              "Visa Interview Preparation",
              "Document Verification"
            ],
            slogan: "Your pathway to study or work abroad starts here"
          })
        }}
      />
    </main>
  );
}
