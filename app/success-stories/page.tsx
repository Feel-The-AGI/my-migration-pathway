import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Read real success stories from Migration Pathway clients who successfully studied and worked abroad. See how we helped them achieve their dreams.",
};

const stories = [
  {
    name: "Abigail Mensah",
    destination: "Toronto, Canada",
    program: "MBA, University of Toronto",
    quote: "Migration Pathway handled every step. I felt confident going into my visa interview and got approved the first time. The team was always available and truly cared about my success.",
    year: "2024",
  },
  {
    name: "Kwame Ofori",
    destination: "Birmingham, UK",
    program: "MSc Computer Science, University of Birmingham",
    quote: "They were honest about what was possible and helped me choose a realistic study program. I'm now enrolled abroad and couldn't be happier with the support I received.",
    year: "2024",
  },
  {
    name: "Ama Darko",
    destination: "Sydney, Australia",
    program: "BSc Nursing, University of Sydney",
    quote: "I was overwhelmed by the process, but Migration Pathway made everything clear. From school selection to visa preparation, they guided me step by step. I'm now studying in Australia!",
    year: "2023",
  },
  {
    name: "Emmanuel Asante",
    destination: "Berlin, Germany",
    program: "MSc Engineering, TU Berlin",
    quote: "Germany was not on my radar until Migration Pathway showed me the affordable tuition options. The SOP writing support was exceptional — my application stood out.",
    year: "2023",
  },
  {
    name: "Gifty Owusu",
    destination: "London, UK",
    program: "LLM International Law, King's College London",
    quote: "The team's knowledge of UK universities is unmatched. They matched me with the perfect program and even helped with scholarship applications. I received a partial scholarship!",
    year: "2024",
  },
  {
    name: "Daniel Tetteh",
    destination: "Vancouver, Canada",
    program: "Diploma in Hospitality Management",
    quote: "I thought studying abroad was out of reach financially, but the team showed me affordable pathways in Canada. The accommodation and airport pickup services made my transition smooth.",
    year: "2023",
  },
];

const stats = [
  { value: "98%", label: "Visa success rate" },
  { value: "99.6%", label: "Student satisfaction" },
  { value: "500+", label: "Students placed abroad" },
  { value: "40+", label: "Partner universities" },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-spacing bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <p className="small-label">Success Stories</p>
                <h1 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                  Real students. Real results.
                </h1>
                <p className="mt-4 text-sm text-slate sm:mt-6 sm:text-base">
                  Every story here represents a real person who trusted Migration Pathway with their future. We're proud to have helped hundreds of Ghanaians achieve their study abroad dreams.
                </p>
              </div>
              <div>
                <Image
                  src="/image-1.jpeg"
                  alt="Students celebrating graduation"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl object-cover shadow-soft"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-charcoal/10 bg-warmwhite py-10">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="grid gap-4 grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-semibold text-deepolive sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-sm text-slate">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-spacing">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 sm:mb-12">
              <p className="small-label">Testimonials</p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">
                What our clients say
              </h2>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stories.map((story) => (
                <div key={story.name} className="card p-6">
                  <p className="text-sm leading-relaxed text-charcoal">"{story.quote}"</p>
                  <div className="mt-6 border-t border-charcoal/10 pt-4">
                    <p className="text-sm font-semibold text-charcoal">{story.name}</p>
                    <p className="text-xs text-slate">{story.program}</p>
                    <p className="text-xs text-slate">{story.destination} · {story.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-spacing bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 text-center sm:mb-12">
              <p className="small-label">Our Community</p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">
                Students who chose Migration Pathway
              </h2>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/image-1.jpeg" alt="Migration Pathway graduates" width={800} height={500} className="w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image src="/image-6.jpeg" alt="University admission specialists" width={800} height={500} className="w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="rounded-2xl bg-deepolive px-6 py-10 text-center text-white sm:rounded-3xl sm:px-8 sm:py-12">
              <h2 className="font-serif text-2xl sm:text-3xl">Want to be our next success story?</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/80">
                Start your journey today. Reach out for a free consultation and let us help you achieve your study abroad goals.
              </p>
              <a
                href="https://whatsapp.com/channel/0029Vb8CWnkGU3BFQ3uq7W1H"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-deepolive"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
