import TrainingCard from "./components/training-card";
import LinkRow from "./components/link-row";
import { links, COFFEE_URL, EMAIL } from "./linksData";
import { FaMugHot, FaEnvelope } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[460px] flex-col gap-4 px-4 pb-12 pt-12">
      <header className="mb-2">
        <h1 className="mt-2 text-5xl font-extrabold leading-[0.95] tracking-tight">
          TifeLogs
        </h1>
        <p className="mt-4 max-w-[36ch] text-lg leading-snug text-paper/90">
          I film my daily lifts. I love to run, cycle and take photos. I am
          currently learning French.
        </p>
      </header>

      <TrainingCard />

      <ul className="mt-4 flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <LinkRow {...l} />
          </li>
        ))}
      </ul>

      <section className="mt-4 grid gap-3">
        <a
          href={COFFEE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border-2 border-paper/50 p-4 transition-colors hover:border-sun hover:bg-paper/10"
        >
          <FaMugHot className="text-3xl text-sun" aria-hidden />
          <span className="flex-1">
            <span className="block text-lg font-bold leading-tight">
              Enjoy the content? Buy me a coffee
            </span>
            <span className="block text-sm text-paper/80">
              It helps me keep making the vlogs.
            </span>
          </span>
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="group flex items-center gap-4 rounded-2xl border-2 border-paper/50 p-4 transition-colors hover:border-sun hover:bg-paper/10"
        >
          <FaEnvelope className="text-3xl text-sun" aria-hidden />
          <span className="flex-1">
            <span className="block text-lg font-bold leading-tight">
              Want a plan made for you? Email me
            </span>
            <span className="block text-sm text-paper/80">{EMAIL}</span>
          </span>
        </a>
      </section>

      <footer className="mt-6 text-center text-sm text-paper/70">
        © 2026 Tife Olatunji
      </footer>
    </main>
  );
}
