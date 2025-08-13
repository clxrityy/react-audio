import { type ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={`focus:outline-none focus:shadow-outline
        disabled:opacity-50 disabled:cursor-not-allowed
        rounded-md px-4 py-2 transition-all duration-200 active:scale-95
        disabled:active:scale-100 disabled:transition-none
        cursor-pointer
      `}
    >
      {children}
    </button>
  );
};
