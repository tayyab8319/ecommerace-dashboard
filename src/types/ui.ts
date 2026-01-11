import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  info?: string;
}

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "span"
  | "small";
export type TypographyWeight =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold";
export type Color =
  | "default"
  | "primary"
  | "secondary"
  | "muted"
  | "danger"
  | "success";
export type Font = "default";

export type TypographyProps = {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: Color;
  font?: Font;
  children: ReactNode;
  className?: string;
};
