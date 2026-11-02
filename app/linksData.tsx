import {
  FaYoutube,
  FaStrava,
  FaInstagram,
  FaTiktok,
  FaGlobe,
} from "react-icons/fa6";
import { LinkItem } from "./types";

export const TRAINING_PLAN_URL =
  "https://app.notion.com/p/Training-Plan-40cf4ab2ca6581c68f34f6fbe11b2053?source=copy_link";
export const COFFEE_URL = "https://coff.ee/qayyax";
export const EMAIL = "qayyax@gmail.com";

export const week = [
  { day: "Mon", focus: "Chest and triceps" },
  { day: "Tue", focus: "Back and biceps" },
  { day: "Wed", focus: "Legs" },
  { day: "Thu", focus: "Shoulders" },
  { day: "Fri", focus: "Chest and arms" },
  { day: "Sat", focus: "Back and hamstrings" },
  { day: "Sun", focus: "Rest", rest: true },
];

export const links: LinkItem[] = [
  {
    title: "TifeLogs on YouTube",
    prompt: "A new vlog every week. See what my week looks like.",
    cta: "Watch",
    href: "https://www.youtube.com/@TifeLogs/",
    brand: "#ff0033",
    icon: FaYoutube,
  },
  {
    title: "Run with me on Strava",
    prompt: "Follow my runs and see my pace.",
    cta: "Follow",
    href: "https://www.strava.com/athletes/1545128530",
    brand: "#fc4c02",
    icon: FaStrava,
  },
  {
    title: "Instagram",
    prompt: "Photos, art and behind the scenes. Say hi in my DMs.",
    cta: "Follow",
    href: "https://www.instagram.com/tifelogs",
    brand: "#e1306c",
    icon: FaInstagram,
  },
  {
    title: "TikTok",
    prompt: "Quick clips between the vlogs.",
    cta: "Watch",
    href: "https://www.tiktok.com/@tifelogs",
    brand: "#25f4ee",
    icon: FaTiktok,
  },
  {
    title: "qayyax.xyz",
    prompt: "More more about me.",
    cta: "Visit",
    href: "https://qayyax.xyz",
    brand: "#2a3fe0",
    icon: FaGlobe,
  },
];
