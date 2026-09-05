import { permanentRedirect, RedirectType } from "next/navigation";

export default function AIAutomationAliasRedirect() {
  permanentRedirect("/services/ai-automation", RedirectType.replace);
}
