import { Label } from '../../Atoms/Label/Label';
import { Checkbox } from '../../Atoms/Checkbox/Checkbox';
import styles from './CheckboxGroup.module.css';

interface CheckboxGroupProps {
  id: string;
  labelText: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  error?: string;
  onBlur?: () => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  id,
  labelText,
  onChange,
  checked,
  required = false,
  error,
  onBlur
}) => (
  <div className={`${styles.checkboxGroup} ${error ? styles.error : ''}`}>
    <div className={styles.checkboxContainer}>
      <Checkbox
        id={id}
        onChange={onChange}
        checked={checked}
        ariaInvalid={!!error}
        ariaRequired={required}
        required={required}
        onBlur={onBlur}
      />
      <Label htmlFor={id} labelText={labelText} />
    </div>

    {error && (
      <span className={styles.checkboxMessage} role="alert">
        {error}
      </span>
    )}
  </div>
);
