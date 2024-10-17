import styles from './Radio.module.css';

interface RadioProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  ariaRequired?: boolean;
  ariaInvalid?: boolean;
  onBlur?: () => void;
}

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  checked,
  onChange,
  required,
  ariaRequired,
  ariaInvalid,
  onBlur
}) => (
  <div className={styles.wrapper}>
    <input
      id={id}
      name={name}
      className={styles.radio}
      type="radio"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      onBlur={onBlur}
      required={required}
      aria-required={ariaRequired}
      aria-invalid={ariaInvalid}
    />
  </div>
);
