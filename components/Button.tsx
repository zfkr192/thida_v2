import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = (componentProps) => {
  const {
    variant = 'primary',
    size = 'md',
    children,
    href,
    target,
    rel,
    className,
    ...buttonSpecificAttrs
  } = componentProps;

  const baseStyles = "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out inline-flex items-center justify-center font-opensans";
  
  const variantStyles = {
    primary: "bg-teal-600 hover:bg-teal-700 text-white focus:ring-teal-500",
    secondary: "bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-400",
    outline: "bg-transparent hover:bg-teal-50 text-teal-700 border border-teal-600 focus:ring-teal-500",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`.trim();

  if (href) {
    const {
      type, value, form, formAction, formEncType, formMethod, formNoValidate, formTarget,
      onClick, onCopy, // Specific handlers from the error
      ...safePassThroughProps // Rest of the props from buttonSpecificAttrs
    } = buttonSpecificAttrs;
    
    // Cast to 'any' first for properties that might not overlap perfectly, then to specific Anchor attributes
    const anchorSpecificProps = safePassThroughProps as any;

    const anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
      ...anchorSpecificProps,
      href,
      target,
      rel,
      className: combinedClassName,
      onClick: onClick as unknown as React.MouseEventHandler<HTMLAnchorElement> | undefined,
      onCopy: onCopy as unknown as React.ClipboardEventHandler<HTMLAnchorElement> | undefined,
    };

    return (
      <a {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...buttonSpecificAttrs}>
      {children}
    </button>
  );
};