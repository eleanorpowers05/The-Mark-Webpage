import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | The Mark UChicago",
};

// TODO: replace with real client work
const projects: { name: string; category: string }[] = [];

export default function Portfolio() {
  return (
    <>
      <section className="bg-gradient-to-b from-black to-navy px-6 py-24 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Our Portfolio</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
          A look at the brands we&apos;ve helped shine.
        </p>
      </section>

      <section className="bg-gradient-to-b from-navy to-black px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          {projects.length === 0 ? (
            <p className="text-center text-sm text-white/50">
              Case studies coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.name} className="rounded-2xl border border-white/10 bg-white/5">
                  <div className="aspect-video rounded-t-2xl bg-white/10" />
                  <div className="p-6">
                    <h2 className="font-semibold">{project.name}</h2>
                    <p className="text-sm text-white/60">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
