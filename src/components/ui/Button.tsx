import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
}) => {
  const baseClasses = `
    relative overflow-hidden font-semibold tracking-wide
    transition-all duration-300 ease-out
    inline-flex items-center justify-center gap-2
    focus:outline-none focus:ring-4 focus:ring-opacity-30
    transform hover:scale-[1.02] active:scale-[0.98]
    disabled:transform-none disabled:cursor-not-allowed
    backdrop-blur-sm
  `;
  
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700
      hover:from-blue-500 hover:via-blue-600 hover:to-purple-600
      text-white shadow-lg hover:shadow-xl
      border border-blue-500/20
      focus:ring-blue-500
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-white/20 before:to-transparent before:opacity-0
      hover:before:opacity-100 before:transition-opacity before:duration-300
    `,
    secondary: `
      bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900
      hover:from-slate-600 hover:via-slate-700 hover:to-slate-800
      text-white shadow-lg hover:shadow-xl
      border border-slate-600/30
      focus:ring-slate-500
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-white/10 before:to-transparent before:opacity-0
      hover:before:opacity-100 before:transition-opacity before:duration-300
    `,
    outline: `
      bg-transparent hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50
      border-2 border-blue-600 hover:border-purple-600
      text-blue-600 hover:text-purple-600
      shadow-md hover:shadow-lg
      focus:ring-blue-500
      backdrop-blur-sm
    `,
    ghost: `
      bg-transparent hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200
      text-slate-700 hover:text-slate-900
      hover:shadow-md
      focus:ring-slate-400
      border border-transparent hover:border-slate-200
    `,
    gradient: `
      bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
      hover:from-pink-400 hover:via-red-400 hover:to-yellow-400
      text-white shadow-lg hover:shadow-xl
      border border-pink-400/30
      focus:ring-pink-500
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-white/20 before:to-transparent before:opacity-0
      hover:before:opacity-100 before:transition-opacity before:duration-300
    `
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg min-h-[36px]',
    md: 'px-6 py-3 text-base rounded-xl min-h-[44px]',
    lg: 'px-8 py-4 text-lg rounded-xl min-h-[52px]',
    xl: 'px-10 py-5 text-xl rounded-2xl min-h-[60px]',
  };

  const disabledClasses = disabled || loading ? `
    opacity-50 cursor-not-allowed 
    hover:scale-100 active:scale-100
    before:opacity-0 hover:before:opacity-0
  ` : '';

  const classes = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${disabledClasses}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const LoadingSpinner = () => (
    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
  );

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {/* Ripple effect overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-inherit">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>
      
      {/* Content */}
      <div className="relative flex items-center gap-2">
        {loading && <LoadingSpinner />}
        {!loading && icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        <span className={loading ? 'opacity-70' : ''}>{children}</span>
        {!loading && icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </div>
    </button>
  );
};

export default Button;