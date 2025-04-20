import { linkProperty } from "../types";
import { shantellSans } from "../fonts";

type Props = linkProperty;

export default function LinkBig({
  title,
  description,
  link,
  icon: Icon,
}: Props) {
  return (
    <div className="big-link-container ">
      <a href={link} target="_blank">
        <div className="logo-container">
          <Icon />
        </div>
        <div className="logo-text-container">
          <h1 className={`${shantellSans.className}`}>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </a>
    </div>
  );
}
