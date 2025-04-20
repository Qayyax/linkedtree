import { linkProperty } from "../types";

type Props = linkProperty;

export default function LinkSmall({ link, icon: Icon }: Props) {
  return (
    <div className="small-link-container">
      <a href={link} target="_blank">
        <Icon className="text-2xl" />
      </a>
    </div>
  );
}
