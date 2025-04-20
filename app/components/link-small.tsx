import { linkProperty } from "../types";

type Props = linkProperty;

export default function LinkSmall({ link, icon }: Props) {
  return (
    <div className="small-link-container">
      <a href={link} target="_blank">
        {icon}
      </a>
    </div>
  );
}
