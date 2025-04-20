import { ReactElement } from "react";
import { linkProperty } from "../types";

interface Props extends linkProperty {
  children: ReactElement;
}

export default function LinkSmall({ link, children }: Props) {
  return (
    <div>
      <a href={link} target="_blank">
        {children}
      </a>
    </div>
  );
}
