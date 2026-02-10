import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Programs & Pathways",
  description:
    "Discover study and migration pathways available through Migration Pathway — undergraduate, postgraduate, foundation, and professional programs abroad.",
};

const programs = [
  {
    title: "Foundation / Pathway Programs",
    desc: "Bridging programs designed for students who need additional academic preparation before starting an undergraduate degree. Ideal for those who don't meet direct entry requirements.",
    duration: "6–12 months",
    destinations: "UK, Australia, Europe",
  },
  {
    title: "Undergraduate Degrees",
    desc: "Full bachelor's degree programs at partner universities. We guide you through school selection, applications, and scholarship opportunities to get the best fit.",
    duration: "3–4 years",
    destinations: "UK, USA, Canada, Australia, Europe",
  },
  {
    title: "Postgraduate / Master's Programs",
    desc: "Master's and taught postgraduate programs for graduates looking to advance their careers or switch fields. Access to funded and scholarship opportunities.",
    duration: "1–2 years",
    destinations: "UK, USA, Canada, Australia, Europe",
  },
  {
    title: "PhD & Research Programs",
    desc: "Doctoral and research degree placements with supervision from world-leading academics. Includes guidance on research proposals and funding applications.",
    duration: "3–5 years",
    destinations: "UK, USA, Canada, Australia",
  },
  {
    title: "Professional & Vocational Courses",
    desc: "Short-term professional qualifications and vocational training programs for career-focused learners looking to gain specific skills abroad.",
    duration: "3–12 months",
    destinations: "UK, Canada, Australia",
  },
  {
    title: "English Language Programs",
    desc: "Pre-sessional English and academic language courses for students who need to meet English proficiency requirements before starting their main program.",
    duration: "4–16 weeks",
    destinations: "UK, USA, Canada, Australia",
  },
];

const pathways = [
  {
    title: "Study-to-Work Pathway",
    desc: "Start with a study program, then transition to a post-study work visa. Many countries offer 2–4 year work permits after graduation.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Permanent Residency Pathway",
    desc: "Countries like Canada and Australia offer clear immigration pathways for graduates. We guide you through the entire transition from student to PR.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Family Sponsorship Pathway",
    desc: "Once settled abroad, explore options to sponsor family members. We provide guidance on family reunion visas and dependent applications.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-spacing bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <p className="small-label">Programs & Pathways</p>
              <h1 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                Find the right program for your goals.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-slate sm:text-base">
                From foundation courses to PhD programs, we help you choose and apply to the academic pathway that fits your profile, budget, and career plans.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="section-spacing">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 sm:mb-12">
              <p className="small-label">Academic Programs</p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">Study programs we support</h2>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((p) => (
                <div key={p.title} className="card p-6">
                  <h3 className="text-lg font-semibold text-charcoal">{p.title}</h3>
                  <p className="mt-3 text-sm text-slate">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-3 border-t border-charcoal/10 pt-4">
                    <span className="rounded-full bg-mutedgold/15 px-3 py-1 text-xs font-medium text-deepolive">
                      {p.duration}
                    </span>
                    <span className="rounded-full bg-charcoal/5 px-3 py-1 text-xs text-slate">
                      {p.destinations}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Pathways */}
        <section className="section-spacing bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 sm:mb-12">
              <p className="small-label">Migration Routes</p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">Migration pathways after study</h2>
              <p className="mt-3 text-sm text-slate sm:text-base">
                Your degree can be the first step toward long-term settlement abroad. Here are the most common routes.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pathways.map((pw) => (
                <div key={pw.title} className="card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-deepolive/10 text-deepolive">
                    {pw.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-charcoal">{pw.title}</h3>
                  <p className="mt-2 text-sm text-slate">{pw.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="rounded-2xl bg-deepolive px-6 py-10 text-center text-white sm:rounded-3xl sm:px-8 sm:py-12">
              <h2 className="font-serif text-2xl sm:text-3xl">Ready to start your application?</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/80">
                Talk to our consultants to find the perfect program and pathway for you.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href="https://whatsapp.com/channel/0029Vb8CWnkGU3BFQ3uq7W1H"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-deepolive"
                >
                  Chat on WhatsApp
                </a>
                <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
