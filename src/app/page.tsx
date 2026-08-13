import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "50+", label: "Members" },
  { value: "20+", label: "Years Strong" },
  { value: "6+", label: "Capabilities" },
];

const services = [
  { name: "Brand Management", description: "Understand how your brand is perceived in the market." },
  { name: "Content Creation", description: "Design and create content that attracts customers to your brand." },
  { name: "Digital Strategy", description: "Plans to achieve your business goals through digital initiatives." },
  { name: "Social Media", description: "Leverage platforms to connect with your audience and drive traffic." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <Image
          src="/brand/bg-texture.png"
          alt=""
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            We make brands <span className="text-mark-blue">shine</span>.
          </h1>
          <p className="mt-6 text-lg text-white/70">
            The University of Chicago&apos;s premier marketing consultancy.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-mark-blue px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 px-6 py-14 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-mark-blue sm:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-mark-blue">
          Our Mission
        </h2>
        <p className="mt-6 text-2xl font-medium leading-relaxed text-white/90 sm:text-3xl">
          We provide professional marketing services to businesses across the country
          and support students in their exploration of the industry.
        </p>
        <div className="mx-auto mt-10 h-px w-16 bg-mark-blue/60" />
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
          <Link href="/services" className="text-sm font-semibold text-mark-blue hover:underline">
            View all services &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-mark-blue/50"
            >
              <h3 className="font-semibold text-white">{service.name}</h3>
              <p className="mt-2 text-sm text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="mt-4 text-white/60">
            Contact us with new partnership opportunities. No matter your marketing
            needs, we&apos;ll provide pro bono services to help make your brand shine.
          </p>
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
