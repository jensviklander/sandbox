import styles from "./Input.module.css";

interface InputProps {
  placeholder?: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ placeholder, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    className={styles.input}
  />
);
