"use client";

import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

type IconName = keyof typeof LucideIcons;

interface DynamicIconProps extends Omit<LucideProps, "ref"> {
  iconName: string;
}

export const DynamicIcon = ({ iconName, ...props }: DynamicIconProps) => {
  const name = iconName.replace("lucide:", "");

  const isValidIcon = (name: string): name is IconName => {
    return name in LucideIcons;
  };

  if (!isValidIcon(name)) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  const IconComponent = LucideIcons[name] as React.ElementType;

  return <IconComponent {...props} />;
};
