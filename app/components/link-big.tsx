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
    <div className="big-link-container border-2 border-red-800 rounded-xl max-w-[350px]">
      <a
        href={link}
        target="_blank"
        className="flex items-center flex-wrap py-3 px-2 justify-between"
      >
        <div className="logo-container self-start border-2 border-purple-600 rounded-full">
          <Icon className="text-2xl" />
        </div>
        <div className="logo-text-container flex flex-col items-start">
          <h1 className={`${shantellSans.className}`}>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </a>
    </div>
  );
}
