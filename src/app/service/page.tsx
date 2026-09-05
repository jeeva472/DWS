import { permanentRedirect, RedirectType } from "next/navigation";

export default function ServicePageRedirect() {
  permanentRedirect("/services", RedirectType.replace);
}
