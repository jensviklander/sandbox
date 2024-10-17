import { Label } from '../../Atoms/Label/Label';
import { Radio } from '../../Atoms/Radio/Radio';
import styles from './RadioGroup.module.css';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  id: string;
  labelText: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  onBlur?: () => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  id,
  labelText,
  options,
  selectedValue,
  onChange,
  required = false,
  error,
  onBlur
}) => (
  <div className={`${styles.radioGroup} ${error ? styles.error : ''}`}>
    <Label htmlFor={id} labelText={labelText} />

    <div className={styles.radioContainer}>
      {options.map((option) => (
        <div key={option.value} className={styles.radioOption}>
          <Radio
            id={`${id}-${option.value}`}
            name={id}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            required={required}
            ariaInvalid={!!error}
            ariaRequired={required}
            onBlur={onBlur}
          />
          <Label htmlFor={`${id}-${option.value}`} labelText={option.label} />
        </div>
      ))}
    </div>

    {error && (
      <span className={styles.radioMessage} role="alert">
        {error}
      </span>
    )}
  </div>
);
