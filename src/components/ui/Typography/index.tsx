import { cn } from "@/lib/twMerge";
import { TypographyProps } from "@/types/ui";
import { FC, JSX } from "react";
import { typographyStyles } from "./style";

export const Typography: FC<TypographyProps> = ({
  variant = "p",
  weight = "normal",
  color = "default",
  font = "default",
  className,
  children,
}) => {
  const Component = variant as keyof JSX.IntrinsicElements;
  return (
    <Component
      className={cn(
        typographyStyles.variant[variant],
        typographyStyles.weight[weight],
        typographyStyles.color[color],
        typographyStyles.font[font],
        className
      )}
    >
      {children}
    </Component>
  );
};
