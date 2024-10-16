import styles from './Checkbox.module.css';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  ariaRequired?: boolean;
  ariaInvalid?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  required,
  ariaRequired,
  ariaInvalid
}) => (
  <div className={styles.wrapper}>
    <input
      id={id}
      className={styles.checkbox}
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      required={required}
      aria-required={ariaRequired}
      aria-invalid={ariaInvalid}
    />
  </div>
);
