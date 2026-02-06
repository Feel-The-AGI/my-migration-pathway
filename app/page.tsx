import Image from "next/image";

const stats = [
  { value: "98%", label: "Visa success rate" },
  { value: "99.6%", label: "Student satisfaction" },
  { value: "40+", label: "UK university partners" }
];

const socials = [
  { name: "TikTok", href: "https://www.tiktok.com/@migrationpathway" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61587483507405" },
  { name: "Instagram", href: "https://www.instagram.com/mymigrationpathway/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/migrationpathway" },
  { name: "Twitter", href: "https://twitter.com/migaborpathway" },
  { name: "YouTube", href: "https://www.youtube.com/@migrationpathway" }
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
      {/* Navigation */}
      <nav className="border-b border-charcoal/10 bg-warmwhite">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Migration Pathway Logo"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
            <span className="font-serif text-xl font-semibold text-charcoal">Migration Pathway</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-slate hover:text-charcoal">Services</a>
            <a href="#about" className="text-sm text-slate hover:text-charcoal">About</a>
            <a href="#consultation" className="text-sm text-slate hover:text-charcoal">Contact</a>
            <a
              href="https://wa.me/233544764112"
              className="flex items-center gap-2 rounded-full bg-deepolive px-5 py-2 text-sm font-semibold text-white transition hover:bg-charcoal"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <header className="section-spacing">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-8">
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
                className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-green-700"
                href="https://wa.me/233544764112">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
          <div className="flex-1">
            <Image
              src="/image-1.jpeg"
              alt="Students celebrating study abroad success"
              width={600}
              height={400}
              className="rounded-3xl object-cover shadow-soft"
              priority
            />
          </div>
        </div>
        <div className="mx-auto mt-12 w-full max-w-6xl px-6">
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
            {services.map((service, index) => (
              <div key={service.title} className="card overflow-hidden">
                <Image
                  src={`/image-${index + 2}.jpeg`}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate">{service.description}</p>
                </div>
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
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="card overflow-hidden">
                <Image
                  src={`/image-${index + 5}.jpeg`}
                  alt={testimonial.name}
                  width={600}
                  height={400}
                  className="w-full object-contain"
                />
                <div className="p-8">
                  <p className="text-base text-charcoal">"{testimonial.quote}"</p>
                  <p className="mt-6 text-sm font-semibold text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate">{testimonial.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Photo Gallery */}
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4 text-center">
            <p className="small-label">Our Community</p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Students who chose Migration Pathway.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="overflow-hidden rounded-2xl bg-slate/10">
                <Image
                  src={`/image-${num}.jpeg`}
                  alt={`Migration Pathway student ${num}`}
                  width={800}
                  height={500}
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Destinations */}
      <section className="section-spacing bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4 text-center">
            <p className="small-label">Destinations</p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Your gateway to the world.
            </h2>
            <p className="mx-auto max-w-2xl text-slate">
              We help students and professionals relocate to these amazing destinations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* United Kingdom */}
            <div className="group relative h-64 overflow-hidden rounded-2xl">
              <Image
                src="/image-5.jpeg"
                alt="Study in United Kingdom"
                fill
                className="object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg md:text-3xl">
                  STUDY IN<br />UNITED KINGDOM
                </h3>
                <a
                  href="https://forms.gle/UK_PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-fit rounded-full bg-purple-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
                >
                  Apply Now
                </a>
              </div>
            </div>
            {/* USA & Canada */}
            <div className="group relative h-64 overflow-hidden rounded-2xl">
              <Image
                src="/image-2.jpeg"
                alt="Study in USA and Canada"
                fill
                className="object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg md:text-3xl">
                  STUDY IN USA<br />AND CANADA
                </h3>
                <a
                  href="https://forms.gle/USA_CANADA_PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-fit rounded-full bg-purple-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
                >
                  Apply Now
                </a>
              </div>
            </div>
            {/* Australia */}
            <div className="group relative h-64 overflow-hidden rounded-2xl">
              <Image
                src="/image-3.jpeg"
                alt="Study in Australia"
                fill
                className="object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg md:text-3xl">
                  STUDY IN<br />AUSTRALIA
                </h3>
                <a
                  href="https://forms.gle/AUSTRALIA_PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-fit rounded-full bg-purple-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
                >
                  Apply Now
                </a>
              </div>
            </div>
            {/* Europe */}
            <div className="group relative h-64 overflow-hidden rounded-2xl">
              <Image
                src="/image-4.jpeg"
                alt="Study in Europe"
                fill
                className="object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg md:text-3xl">
                  STUDY IN<br />EUROPE
                </h3>
                <a
                  href="https://forms.gle/EUROPE_PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-fit rounded-full bg-purple-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
                >
                  Apply Now
                </a>
              </div>
            </div>
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
                  className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-green-700"
                  href="https://wa.me/233544764112">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Start a WhatsApp chat
                </a>
                <a
                  className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-charcoal"
                  href="mailto:mymigrationpathway@gmail.com"
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
                <p className="flex items-center gap-2 text-sm text-slate">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0544764112
                </p>
                <p className="flex items-center gap-2 text-sm text-slate">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  0544764112
                </p>
                <p className="flex items-center gap-2 text-sm text-slate">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  mymigrationpathway@gmail.com
                </p>
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
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-deepolive"
                href="https://wa.me/233544764112">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.jpeg"
                  alt="Migration Pathway Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="font-semibold text-charcoal">Migration Pathway</p>
              </div>
              <p className="mt-3 text-sm text-slate">Migration and education services. Your trusted partner for study and work abroad guidance in Ghana.</p>
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
              <a className="text-slate hover:text-charcoal" href="tel:+233544764112">0544764112</a>
              <a className="text-slate hover:text-charcoal" href="https://wa.me/233544764112">WhatsApp: 0544764112</a>
              <a className="text-slate hover:text-charcoal" href="mailto:mymigrationpathway@gmail.com">mymigrationpathway@gmail.com</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-charcoal text-sm">Follow Us</p>
              <div className="flex flex-wrap gap-2">
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
                <a
                  href="https://www.linkedin.com/company/migrationpathway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 text-slate transition hover:bg-deepolive hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/migrationpathway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 text-slate transition hover:bg-deepolive hover:text-white"
                  aria-label="Twitter"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@migrationpathway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 text-slate transition hover:bg-deepolive hover:text-white"
                  aria-label="YouTube"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
              url: "https://mymigrationpathway.com/logo.jpeg",
              width: 200,
              height: 200
            },
            image: "https://mymigrationpathway.com/logo.jpeg",
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
              "https://www.linkedin.com/company/migrationpathway",
              "https://twitter.com/migaborpathway",
              "https://www.youtube.com/@migrationpathway",
              "https://wa.me/233544764112"
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+233544764112",
                email: "mymigrationpathway@gmail.com",
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
