import { Label } from '../../Atoms/Label/Label';
import { Input } from '../../Atoms/Input/Input';
import styles from './InputGroup.module.css';

interface InputGroupProps {
  id: string;
  labelText: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url';
  placeholder?: string;
  required?: boolean;
  error?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  id,
  labelText,
  type = 'text',
  placeholder,
  required = false,
  error,
  onChange,
  onBlur
}) => (
  <div className={`${styles.inputGroup} ${error ? styles.error : ''}`}>
    <Label htmlFor={id} labelText={labelText} />

    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      ariaInvalid={!!error}
      ariaRequired={required}
      required={required}
    />

    {error && (
      <span className={styles.errorMessage} role="alert">
        {error}
      </span>
    )}
  </div>
);
