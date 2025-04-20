import { shantellSans } from "./fonts";

export default function Home() {
  return (
    <main>
      <div className="name-link">
        <h1 className={`${shantellSans.className} text-2xl font-extrabold`}>
          Tife Olatunji
        </h1>
        {/* Component goes here */}
      </div>
    </main>
  );
}
