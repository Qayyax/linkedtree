import { ReactElement } from "react";
import { linkProperty } from "../types";

interface Props extends linkProperty {
  children: ReactElement;
}

export default function LinkSmall({ link, children }: Props) {
  return (
    <div className="small-link-container">
      <a href={link} target="_blank">
        {children}
      </a>
    </div>
  );
}
