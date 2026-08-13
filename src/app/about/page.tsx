import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Mark UChicago",
};

const pillars = [
  { name: "Challenge", copy: "The world-class curriculum offered by the University of Chicago lacks hands-on experience in marketing. Passionate students enjoy learning in the classroom, but they want to do more with their education." },
  { name: "Solution", copy: "The Mark brings students and professionals together. Students gain real-world experience in advertising, tech, strategy, and creative services while helping our business partners." },
  { name: "Result", copy: "During their undergraduate career, members are granted an in-depth look into the marketing field that cannot be found in regular curricula. Together, we generate competitive strategies and creative deliverables for businesses each academic quarter." },
];

function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 3 4 14h6l-1 8 9-11h-6l1-8Z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 4.5 6v6c0 4.8 3.2 8.8 7.5 10 4.3-1.2 7.5-5.2 7.5-10V6L12 3Z" strokeLinejoin="round" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconCommunity() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="12" r="5.5" />
      <circle cx="15" cy="12" r="5.5" />
    </svg>
  );
}

const values = [
  { name: "Energetic", icon: IconBolt, copy: "A successful career in marketing consulting requires a lively, outside-the-box mindset. Our members embody this energy." },
  { name: "Professional", icon: IconShield, copy: "We work with some of the nation's best up-and-coming brands. A strict attitude of professionalism is key to our success." },
  { name: "Motivated", icon: IconTarget, copy: "The work we put into supporting businesses culminates in deliverables implemented by our clients, a milestone that helps everyone succeed." },
  { name: "Community", icon: IconCommunity, copy: "We know what's at stake, but we also care about our close-knit community. At our core, we are a family inside and outside of client work." },
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
        <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch">
          {pillars.flatMap((pillar, i) => {
            const card = (
              <div
                key={pillar.name}
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-mark-blue/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-mark-blue text-sm font-bold text-mark-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-6 text-sm font-semibold uppercase tracking-widest text-mark-blue">
                  {pillar.name}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{pillar.copy}</p>
              </div>
            );
            if (i === pillars.length - 1) return [card];
            return [
              card,
              <div
                key={`${pillar.name}-arrow`}
                className="hidden items-center justify-center text-white/20 sm:flex"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>,
            ];
          })}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-3xl font-bold">Our Values</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.name}
                  className="group rounded-2xl border border-white/10 bg-black/40 p-6 transition-colors hover:border-mark-blue/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mark-blue/10 text-mark-blue transition-colors group-hover:bg-mark-blue/20">
                    <Icon />
                  </div>
                  <h3 className="mt-4 font-semibold text-mark-blue">{value.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{value.copy}</p>
                </div>
              );
            })}
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
