import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Migration Pathway — Ghana's trusted education and migration consultancy. Meet our team, discover our mission, and see our accreditations.",
};

const process = [
  { step: "1", title: "Free Consultation", desc: "We listen to your goals, budget, and timeline to understand what route suits you best." },
  { step: "2", title: "Profile Assessment", desc: "We review your academic background, work experience, and documents to determine eligibility." },
  { step: "3", title: "School & Program Matching", desc: "We recommend universities and programs that align with your profile and career aspirations." },
  { step: "4", title: "Application & Offer Letter", desc: "We prepare and submit your applications, personal statements, and supporting documents." },
  { step: "5", title: "Visa Preparation", desc: "We guide you through the visa application, interview coaching, and compliance checks." },
  { step: "6", title: "Pre-Departure & Arrival", desc: "We arrange accommodation, airport pickup, and orientation to help you settle in confidently." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-spacing bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <p className="small-label">About Us</p>
                <h1 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                  Who We Are
                </h1>
                <p className="mt-4 text-sm text-slate sm:mt-6 sm:text-base">
                  Migration Pathway is a global leader in counselling and providing full application support to place international students into universities abroad.
                </p>
                <p className="mt-3 text-sm text-slate sm:text-base">
                  Our consultants are former international students who experienced the difficulties and opportunities UK higher education provides. They come from a variety of nationalities and have been trained by our trusted university partners.
                </p>
                <p className="mt-3 text-sm text-slate sm:text-base">
                  We represent <strong>40+ UK higher education institutions</strong> with a <strong>98% visa success rate</strong> and <strong>99.6% student satisfaction rate</strong>. Our consultants speak 20 different languages across our global offices.
                </p>
              </div>
              <div>
                <Image
                  src="/image-6.jpeg"
                  alt="Migration Pathway team"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl object-cover shadow-soft"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-spacing">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="card p-6 sm:p-8">
                <h2 className="font-serif text-xl sm:text-2xl">Our Mission</h2>
                <p className="mt-4 text-sm text-slate sm:text-base">
                  To provide honest, accessible, and professional migration guidance that empowers Ghanaians to pursue education and career opportunities abroad — with transparency at every step.
                </p>
              </div>
              <div className="card p-6 sm:p-8">
                <h2 className="font-serif text-xl sm:text-2xl">Our Vision</h2>
                <p className="mt-4 text-sm text-slate sm:text-base">
                  To become Africa's most trusted migration consultancy, known for integrity, high success rates, and genuine care for every client's journey from application to settlement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section-spacing bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 sm:mb-12">
              <p className="small-label">Step by Step</p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">Our Process</h2>
              <p className="mt-3 text-sm text-slate sm:text-base">
                A clear, structured approach so you always know what comes next.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((item) => (
                <div key={item.step} className="card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mutedgold/20 text-sm font-bold text-deepolive">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="section-spacing">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 sm:mb-12">
              <p className="small-label">Our People</p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">Our Team</h2>
              <p className="mt-3 text-sm text-slate sm:text-base">
                Experienced consultants who have walked the same path — former international students turned trusted advisors.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/image-1.jpeg"
                alt="Migration Pathway Team"
                width={1000}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Licenses & Accreditations */}
        <section className="section-spacing bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 sm:mb-12">
              <p className="small-label">Trust & Credentials</p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">
                Licenses, Accreditations & Affiliations
              </h2>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-charcoal">Registered Business</h3>
                <p className="mt-2 text-sm text-slate">
                  Fully registered and licensed to operate as an education and migration consultancy in Ghana.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-charcoal">University Partners</h3>
                <p className="mt-2 text-sm text-slate">
                  Officially affiliated with 40+ UK higher education institutions for direct student recruitment and support.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-charcoal">Industry Compliance</h3>
                <p className="mt-2 text-sm text-slate">
                  Our processes align with international best practices for immigration consulting and student recruitment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="section-spacing">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 sm:mb-12">
              <p className="small-label">Visit Us</p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">Office Location</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-charcoal">Accra Office</h3>
                <p className="mt-3 text-sm text-slate">47 Nungua Link Road, Second Floor</p>
                <p className="text-sm text-slate">Baatsona Spintex Road, Accra, Ghana</p>
                <p className="mt-1 text-xs text-slate">GPS: GA-414-0365</p>
                <div className="mt-4 border-t border-charcoal/10 pt-4">
                  <p className="text-sm font-semibold text-charcoal">Office Hours</p>
                  <p className="text-sm text-slate">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  <p className="text-sm text-slate">Sunday: Closed</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9!2d-0.113!3d5.635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGA-414-0365!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                  className="h-64 w-full sm:h-80 lg:h-full"
                  style={{ border: 0, minHeight: "280px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Migration Pathway Office Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
