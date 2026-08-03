import {
  Activity,
  Apple,
  Brain,
  ClipboardPen,
  Droplet,
  Dumbbell,
  EyeOff,
  Globe,
  History,
  Leaf,
  Lightbulb,
  Moon,
  Utensils,
  PersonStanding,
  Share2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Sun,
  type LucideIcon,
} from "lucide-react";

/*
  The Figma icons are flattened vector paths with no names attached, so they
  can't be exported as a usable set. These are the closest Lucide equivalents,
  matched against the rendered frame.
*/
export const iconMap = {
  "eye-off": EyeOff,
  chart: Activity,
  history: History,
  shield: ShieldCheck,
  insights: Sparkles,
  tracking: Activity,
  meal: Utensils,
  lifestyle: Lightbulb,
  journal: ClipboardPen,
  moon: Moon,
  utensils: Utensils,
  droplet: Droplet,
  leaf: Leaf,
  walk: PersonStanding,
  apple: Apple,
  dumbbell: Dumbbell,
  brain: Brain,
  sun: Sun,
  stethoscope: Stethoscope,
  globe: Globe,
  share: Share2,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  className,
}: {
  name: IconName | string;
  className?: string;
}) {
  const Cmp = iconMap[name as IconName];
  if (!Cmp) return null;
  return <Cmp className={className} strokeWidth={1.75} aria-hidden="true" />;
}
