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
    <div className="big-link-container border-2 border-purple-800 shadow-[0px_0px_3px_1px] shadow-yellow-900 rounded-xl hover:scale-102">
      <a href={link} target="_blank" className="grid grid-cols-7 gap-2 p-2">
        <div className="logo-container flex flex-col items-center justify-center ">
          <Icon className="text-3xl " />
        </div>
        <div className="logo-text-container self-center col-span-6 flex flex-col items-start">
          <h1 className={`${shantellSans.className} font-bold`}>{title}</h1>
          {description && <p className="font-bold">{description}</p>}
        </div>
      </a>
    </div>
  );
}
