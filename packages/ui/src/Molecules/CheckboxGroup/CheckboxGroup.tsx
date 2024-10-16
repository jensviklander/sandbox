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
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  id,
  labelText,
  onChange,
  checked,
  required = false,
  error
}) => (
  <div className={`${styles.checkboxGroup} ${error ? styles.error : ''}`}>
    <Checkbox
      id={id}
      onChange={onChange}
      checked={checked}
      ariaInvalid={!!error}
      ariaRequired={required}
      required={required}
    />

    <Label htmlFor={id} labelText={labelText} />

    {error && (
      <span className={styles.errorMessage} role="alert">
        {error}
      </span>
    )}
  </div>
);
