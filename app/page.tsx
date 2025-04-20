import LinkListBig from "./components/link-list-big";
import LinkListSmall from "./components/link-list-small";
import { shantellSans } from "./fonts";

export default function Home() {
  return (
    <main>
      <div className="name-link">
        <h1 className={`${shantellSans.className} text-2xl font-extrabold`}>
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
