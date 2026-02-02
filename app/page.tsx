const stats = [
  { value: "150+", label: "Successful placements" },
  { value: "12", label: "Destination countries" },
  { value: "98%", label: "Visa readiness rate" }
];

const services = [
  {
    title: "Study Abroad",
    description:
      "End‑to‑end school selection, admissions support, and visa preparation built around your budget and career goals."
  },
  {
    title: "Work Abroad",
    description:
      "Guidance on global job pathways, employer requirements, and visa documentation to help you relocate with confidence."
  },
  {
    title: "Visa Guidance",
    description:
      "Document review, interview coaching, and compliance checks that reduce delays and improve approval outcomes."
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
                href="https://wa.me/233269599999">
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

      <section className="section-spacing" id="consultation">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="card grid gap-8 p-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="small-label">Consultation</p>
              <h2 className="mt-4 font-serif text-3xl">Let’s design your pathway plan.</h2>
              <p className="mt-4 text-slate">
                Tell us your destination, timeline, and budget. We’ll outline the steps and help
                you prepare confidently.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-deepolive px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-charcoal"
                  href="https://wa.me/233269599999">
                  Start a WhatsApp chat
                </a>
                <a
                  className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-charcoal"
                  href="mailto:hello@mymigrationpathway.com"
                >
                  Email the team
                </a>
              </div>
            </div>
            <div className="space-y-6 rounded-2xl bg-warmwhite p-6">
              <div>
                <p className="text-sm font-semibold text-charcoal">Office hours</p>
                <p className="text-sm text-slate">Mon–Sat · 9:00am – 6:00pm</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Location</p>
                <p className="text-sm text-slate">Accra, Ghana</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Contact</p>
                <p className="text-sm text-slate">+233 26 959 9999</p>
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
                href="https://wa.me/233269599999">
                Chat now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-charcoal/10 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-slate md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-charcoal">Migration Pathway</p>
            <p>Study abroad & work abroad guidance in Ghana.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-charcoal" href="#services">
              Services
            </a>
            <a className="hover:text-charcoal" href="#consultation">
              Consultation
            </a>
            <a className="hover:text-charcoal" href="mailto:hello@mymigrationpathway.com">
              Email
            </a>
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
              "https://wa.me/233269599999"
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
            telephone: "+233269599999",
            email: "hello@mymigrationpathway.com",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
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
            telephone: "+233269599999",
            address: {
              "@type": "PostalAddress",
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
