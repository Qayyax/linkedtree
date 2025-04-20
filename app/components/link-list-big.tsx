import { linksData } from "../linksData";
import LinkBig from "./link-big";

export default function LinkListBig() {
  return (
    <div className="big-list-container">
      <ul className="flex flex-col gap-3">
        {linksData.map((data, index) => (
          <li key={index}>
            <LinkBig {...data} />
          </li>
        ))}
      </ul>
    </div>
  );
}
