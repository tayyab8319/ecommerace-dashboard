"use client";

import { InputProps } from "@/types/ui";
import { FC } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Typography } from "../Typography";
import { inputStyle } from "./style";
import { cn } from "@/lib/twMerge";

export const Input: FC<InputProps> = (props) => {
  const { label, error, info, ...rest } = props;

  return (
    <div className={inputStyle.container}>
      {label && (
        <Typography variant="span" weight="medium">
          {label}
        </Typography>
      )}

      <div className={inputStyle.inputWrapper}>
        <input {...rest} className={cn(inputStyle.input, rest.className)} />
        {info && (
          <InformationCircleIcon width={20} className={inputStyle.infoIcon} />
        )}
      </div>

      {error && (
        <Typography variant="span" color="danger">
          {error}
        </Typography>
      )}
    </div>
  );
};
