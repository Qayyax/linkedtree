import { TRAINING_PLAN_URL, week } from "../linksData";

export default function TrainingCard() {
  return (
    <a
      href={TRAINING_PLAN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block -rotate-1 rounded-3xl bg-sun p-5 text-deep shadow-[0_10px_0_0_var(--color-deep)] transition-transform hover:rotate-0 hover:-translate-y-0.5"
    >
      <p className="font-hand text-2xl leading-none text-court">Start here. It is free.</p>
      <h2 className="mt-2 text-3xl font-extrabold leading-[1.05] tracking-tight">My weekly training plan</h2>
      <p className="mt-2 max-w-[34ch] text-[15px] leading-snug">
        Every session, every exercise, sets and rep ranges. Copy it, run it, make it yours.
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {week.map((d, i) => (
          <li
            key={d.day}
            style={{ "--i": i } as React.CSSProperties}
            className={`pill rounded-full px-3 py-1 text-[13px] ${d.rest ? "border-2 border-dashed border-deep/50" : "bg-deep/10"}`}
          >
            <b>{d.day}</b> {d.focus}
          </li>
        ))}
      </ul>
      <span className="mt-5 inline-flex rounded-full bg-deep px-6 py-3 text-base font-bold text-sun transition-transform group-hover:translate-x-1">
        Open the plan
      </span>
    </a>
  );
}
