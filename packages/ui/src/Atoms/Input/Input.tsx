import styles from './Input.module.css';

interface InputProps {
  id: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url';
  required?: boolean;
  ariaRequired?: boolean;
  ariaInvalid?: boolean;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type = 'text',
  required = false,
  ariaRequired,
  ariaInvalid,
  onChange
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      aria-required={ariaRequired ? 'true' : undefined}
      aria-invalid={ariaInvalid ? 'true' : undefined}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  );
};
