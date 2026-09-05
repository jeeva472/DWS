import { permanentRedirect, RedirectType } from "next/navigation";

export default function ChatbotAliasRedirect() {
  permanentRedirect("/services/chatbot-development", RedirectType.replace);
}
