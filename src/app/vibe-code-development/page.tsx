import { permanentRedirect, RedirectType } from "next/navigation";

export default function VibeCodeAliasRedirect() {
  permanentRedirect("/services/vibe-code-development", RedirectType.replace);
}
