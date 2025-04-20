import { linkProperty } from "../types";

type Props = linkProperty;

export default function LinkBig({ title, description, link, icon }: Props) {
  return (
    <div className="big-link-container ">
      <a href={link} target="_blank">
        <div className="logo-container">{icon}</div>
        <div className="logo-text-container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </a>
      ;
    </div>
  );
}
