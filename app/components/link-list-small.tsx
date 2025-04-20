import { linksData } from "../linksData";
import LinkSmall from "./link-small";

export default function LinkListSmall() {
  return (
    <div className="small-list-container">
      <ul>
        {linksData.map((data, index) => (
          <li key={index}>
            <LinkSmall {...data} />
          </li>
        ))}
      </ul>
    </div>
  );
}
