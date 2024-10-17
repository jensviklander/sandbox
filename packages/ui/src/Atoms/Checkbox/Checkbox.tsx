import styles from './Checkbox.module.css';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  ariaRequired?: boolean;
  ariaInvalid?: boolean;
  onBlur?: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
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
      className={styles.checkbox}
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      onBlur={onBlur}
      required={required}
      aria-required={ariaRequired}
      aria-invalid={ariaInvalid}
    />
  </div>
);
