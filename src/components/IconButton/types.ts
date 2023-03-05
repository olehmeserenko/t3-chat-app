import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  shouldFill?: boolean;
  className?: string;
}
