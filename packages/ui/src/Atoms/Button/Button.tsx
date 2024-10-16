import styles from './Button.module.css';

interface ButtonProps {
  id: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
  ariaLabel?: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({
  id,
  onClick,
  type = 'button',
  disabled = false,
  children,
  ariaLabel,
  variant = 'primary'
}) => {
  const classNames = `${styles.button} ${styles[variant]}`;

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={classNames}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
