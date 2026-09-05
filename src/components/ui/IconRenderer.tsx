import React from "react";
import {
  Code2,
  Cpu,
  Puzzle,
  TrendingUp,
  Target,
  Megaphone,
  Layers,
  Smartphone,
  Users,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Database,
  BarChart3,
  LucideProps,
} from "lucide-react";

interface IconRendererProps extends LucideProps {
  name: string;
}

export function IconRenderer({ name, className = "w-5 h-5", ...props }: IconRendererProps) {
  const iconMap: Record<string, React.ElementType> = {
    code: Code2,
    cpu: Cpu,
    puzzle: Puzzle,
    "chart-up": TrendingUp,
    target: Target,
    megaphone: Megaphone,
    layers: Layers,
    smartphone: Smartphone,
    users: Users,
    rocket: Rocket,
    "shield-check": ShieldCheck,
    "badge-check": CheckCircle2,
    sparkles: Sparkles,
    zap: Zap,
    globe: Globe,
    database: Database,
    analytics: BarChart3,
  };

  const Component = iconMap[name.toLowerCase()] || Sparkles;
  return <Component className={className} {...props} />;
}
