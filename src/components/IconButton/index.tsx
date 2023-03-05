import { IconButtonProps } from "./types";

export const IconButton = ({
  children,
  shouldFill,
  className,
  ...rest
}: IconButtonProps) => {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center [&_svg]:h-6 [&_svg]:w-6 ${
        shouldFill ? "[&_svg>*]:fill-primaryText" : ""
      } ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};
