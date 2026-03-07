import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.scss";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

const CusButton = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  const classes = [
    "ui-btn",
    `ui-btn--${variant}`,
    `ui-btn--${size}`,
    fullWidth ? "ui-btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default CusButton;
