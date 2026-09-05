import { permanentRedirect, RedirectType } from "next/navigation";

export default function DigitalMarketingAliasRedirect() {
  permanentRedirect("/services/digital-marketing", RedirectType.replace);
}
