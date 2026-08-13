import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | The Mark UChicago",
};

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-black to-navy px-6 py-24">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Let&apos;s Connect</h1>
          <p className="mt-6 text-white/70">
            Contact us with new partnership opportunities. No matter your marketing
            needs, we&apos;ll provide pro bono services to help make your brand shine.
          </p>
        </div>

        {/* TODO: wire up to Formspree (or similar) once an endpoint is created */}
        <form className="mt-12 flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-mark-blue"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-mark-blue"
            />
          </div>
          <input
            type="text"
            placeholder="Company"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-mark-blue"
          />
          <textarea
            placeholder="How can we help?"
            rows={5}
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-mark-blue"
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-mark-blue px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
