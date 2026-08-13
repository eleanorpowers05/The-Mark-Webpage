import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | The Mark UChicago",
};

const services = [
  { name: "Brand Management", description: "Conduct research to understand how your brand is perceived in the market." },
  { name: "Content Creation", description: "Design and create content for attracting potential customers to your website." },
  { name: "Digital Strategy", description: "Generate plans to achieve your business goals via digital initiatives." },
  { name: "Social Media", description: "Leverage powerful platforms to connect with your audience and drive traffic." },
  { name: "SEO Strategy", description: "Outline and execute steps to improve your search engine rankings." },
  { name: "Website Design", description: "Improve your website UX and copy so that you maximize the impact of your brand." },
];

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Our Services</h1>
        <p className="mt-6 text-lg text-white/70">
          We put empathy first. As we develop close relationships with our clients,
          we go above and beyond to determine what is best for their brand and business.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-mark-blue/50"
            >
              <h2 className="text-lg font-semibold text-white">{service.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Ready to work together?</h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-mark-blue px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
