import { linkProperty } from "./types";

import { FaInstagram as Instagram } from "react-icons/fa6";
import { FaXTwitter as Twitter } from "react-icons/fa6";
import { FaYoutube as Youtube } from "react-icons/fa6";
import { FaGithub as Github } from "react-icons/fa";
import { FaCode as Code } from "react-icons/fa";
import { FaLinkedin as LinkedIn } from "react-icons/fa6";

export const linksData: linkProperty[] = [
  {
    title: "Youtube - Vlog",
    link: "https://www.youtube.com/@TifeLogs",
    description: "I post weekly activities here",
    icon: Youtube,
  },
  {
    title: "GitHub",
    link: "https://www.github.com/qayyax",
    icon: Github,
  },
  {
    title: "Youtube - Gaming",
    link: "https://www.youtube.com/@qayyax",
    description: "I post gaming contents here",
    icon: Youtube,
  },
  {
    title: "Portfolio",
    link: "https://www.qayyax.xyz",
    description: "Where I post projects I have worked on",
    icon: Code,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/tife-olatunji-b12729296/",
    description: "Send me a message here :)",
    icon: LinkedIn,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/tife_len/",
    icon: Instagram,
    description: "I post art and random things, chat with me here",
  },
  {
    title: "X / Twitter",
    link: "https://x.com/qayyax",
    icon: Twitter,
    description: "I only post when I make something",
  },
];
