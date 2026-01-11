"use client";

import { FC, ReactNode } from "react";
import { cn } from "@/lib/twMerge";
import { buttonStyles } from "./style";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

type ButtonProps = {
  variant?: keyof typeof buttonStyles.variant;
  size?: keyof typeof buttonStyles.size;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  children,
  icon,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        buttonStyles.base,
        buttonStyles.variant[variant],
        buttonStyles.size[size],
        loading && buttonStyles.loading,
        className
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {loading && <ArrowPathIcon width={20} className="animate-spin mr-2" />}
      {children}
    </button>
  );
};
