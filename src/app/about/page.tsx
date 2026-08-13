import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Mark UChicago",
};

const pillars = [
  { name: "Challenge", copy: "The world-class curriculum offered by the University of Chicago lacks hands-on experience in marketing. Passionate students enjoy learning in the classroom, but they want to do more with their education." },
  { name: "Solution", copy: "The Mark brings students and professionals together. Students gain real-world experience in advertising, tech, strategy, and creative services while helping our business partners." },
  { name: "Result", copy: "During their undergraduate career, members are granted an in-depth look into the marketing field that cannot be found in regular curricula. Together, we generate competitive strategies and creative deliverables for businesses each academic quarter." },
];

const values = [
  { name: "Energetic", copy: "A successful career in marketing consulting requires a lively, outside-the-box mindset. Our members embody this energy." },
  { name: "Professional", copy: "We work with some of the nation's best up-and-coming brands. A strict attitude of professionalism is key to our success." },
  { name: "Motivated", copy: "The work we put into supporting businesses culminates in deliverables implemented by our clients, a milestone that helps everyone succeed." },
  { name: "Community", copy: "We know what's at stake, but we also care about our close-knit community. At our core, we are a family inside and outside of client work." },
];

// TODO: replace with real roster
const team: { name: string; role: string }[] = [];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">About The Mark</h1>
        <p className="mt-6 text-lg text-white/70">
          Our vision is to grow the on-campus marketing community across a variety
          of majors and career interests.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.name}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-mark-blue">
                {pillar.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{pillar.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-3xl font-bold">Our Values</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.name} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <h3 className="font-semibold text-mark-blue">{value.name}</h3>
                <p className="mt-2 text-sm text-white/70">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-bold">Meet the Team</h2>
        {team.length === 0 ? (
          <p className="mt-6 text-sm text-white/50">
            Team roster coming soon.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto aspect-square w-full rounded-2xl bg-white/10" />
                <h3 className="mt-3 font-semibold">{member.name}</h3>
                <p className="text-sm text-white/60">{member.role}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
