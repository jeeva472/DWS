import { permanentRedirect, RedirectType } from "next/navigation";

export default function SEOAliasRedirect() {
  permanentRedirect("/services/seo", RedirectType.replace);
}
