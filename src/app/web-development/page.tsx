import { permanentRedirect, RedirectType } from "next/navigation";

export default function WebDevelopmentAliasRedirect() {
  permanentRedirect("/services/web-development", RedirectType.replace);
}
