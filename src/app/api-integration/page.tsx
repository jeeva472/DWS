import { permanentRedirect, RedirectType } from "next/navigation";

export default function APIIntegrationAliasRedirect() {
  permanentRedirect("/services/api-integration", RedirectType.replace);
}
