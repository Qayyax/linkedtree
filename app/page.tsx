import LinkListBig from "./components/link-list-big";
import LinkListSmall from "./components/link-list-small";
import { shantellSans } from "./fonts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 pt-10">
      <div className="name-link flex flex-col gap-2 mb-2">
        <h1 className={`${shantellSans.className} text-3xl font-extrabold`}>
          Tife Olatunji
        </h1>
        {/* Component goes here */}
        <LinkListSmall />
      </div>
      {/* Component goes here */}
      <div className="flex items-center justify-center">
        <LinkListBig />
      </div>
    </main>
  );
}
