import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 border-t border-white/10 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="02" eyebrow="Skills" title="A sharp, modern toolbox." />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-7"
            >
              <p className="font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase">
                {group.index}
              </p>
              <h3 className="font-display mt-2 text-xl font-bold">{group.title}</h3>
              <ul className="mt-6 flex-1 space-y-1">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-white hover:text-black"
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="font-mono text-[11px] tracking-wider uppercase opacity-50">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase">
          Always learning — currently exploring{" "}
          <span className="text-white">databases, auth & system design</span>
        </p>
      </div>
    </section>
  );
}
