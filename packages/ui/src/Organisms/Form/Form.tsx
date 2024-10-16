import { useState } from 'react';
import { InputGroup } from '../../Molecules/InputGroup/InputGroup';
import { CheckboxGroup } from '../../Molecules/CheckboxGroup/CheckboxGroup';
import { Button } from '../../Atoms/Button/Button';
import styles from './Form.module.css';

type FieldType = 'text' | 'email' | 'password' | 'checkbox';

interface Field {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string | boolean;
}

interface FormProps {
  fields: Field[];
  onSubmit: (formData: Record<string, string | boolean>) => void;
  buttonText: string;
}

export const Form: React.FC<FormProps> = ({ fields, onSubmit, buttonText }) => {
  const initialFormState = fields.reduce(
    (acc, field) => {
      acc[field.name] =
        field.defaultValue || (field.type === 'checkbox' ? false : '');
      return acc;
    },
    {} as Record<string, string | boolean>
  );

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string | boolean) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => {
      const { [name]: removedError, ...restErrors } = prevErrors;
      return restErrors;
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      {fields.map((field) => {
        if (field.type === 'checkbox') {
          return (
            <div key={field.name}>
              <CheckboxGroup
                id={field.name}
                labelText={field.label}
                checked={formData[field.name] as boolean}
                onChange={(checked) => handleChange(field.name, checked)}
                required={field.required}
                error={errors[field.name]}
              />
            </div>
          );
        }

        return (
          <div key={field.name}>
            <InputGroup
              id={field.name}
              labelText={field.label}
              type={field.type}
              placeholder={field.placeholder}
              onChange={(value) => handleChange(field.name, value)}
              required={field.required}
              error={errors[field.name]}
            />
          </div>
        );
      })}
      <div className={styles.buttonWrapper}>
        <Button id="submit-button" type="submit" ariaLabel="Submit form">
          {buttonText}
        </Button>
      </div>
    </form>
  );
};
