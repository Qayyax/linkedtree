import { ReactElement } from "react";
import { linkProperty } from "../types";

interface Props extends linkProperty {
  children: ReactElement;
}

export default function LinkBig({ title, description, link, children }: Props) {
  return (
    <div className="big-link-container ">
      <a href={link} target="_blank">
        <div className="logo-container">{children}</div>
        <div className="logo-text-container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </a>
      ;
    </div>
  );
}
