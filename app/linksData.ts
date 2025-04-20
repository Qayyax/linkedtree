import { linkProperty } from "./types";

import { FaInstagram as Instagram } from "react-icons/fa6";
import { FaXTwitter as Twitter } from "react-icons/fa6";
import { FaYoutube as Youtube } from "react-icons/fa6";
import { FaGithub as Github } from "react-icons/fa";
import { FaCode as Code } from "react-icons/fa";

// time to get the links I guess
export const linksData: linkProperty[] = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/tife_len/",
    icon: Instagram,
  },
  {
    title: "X / Twitter",
    link: "https://www.instagram.com/tife_len/",
    icon: Twitter,
  },
  {
    title: "Youtube - Vlog",
    link: "https://www.youtube.com/@TifeLogs",
    description: "I post weekly activities here and sometimes I stream",
    icon: Youtube,
  },
  {
    title: "Youtube - Gaming",
    link: "https://www.youtube.com/@qayyax",
    description: "I post gaming contents here",
    icon: Youtube,
  },
  {
    title: "GitHub",
    link: "https://www.github.com/qayyax",
    icon: Github,
  },
  {
    title: "Portfolio",
    link: "https://www.qayyax.xyz",
    description: "Where I post projects I have worked on",
    icon: Code,
  },
];
