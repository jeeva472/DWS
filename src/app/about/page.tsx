import { permanentRedirect, RedirectType } from "next/navigation";

export default function AboutPageRedirect() {
  permanentRedirect("/about-us", RedirectType.replace);
}
