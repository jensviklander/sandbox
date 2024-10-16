import styles from './Label.module.css';

interface LabelProps {
  htmlFor: string;
  labelText: string;
  isClickable?: boolean;
  children?: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  labelText,
  isClickable = false,
  children
}) => (
  <label
    htmlFor={htmlFor}
    className={`${styles.wrapper} ${isClickable ? styles.clickable : ''}`}
  >
    <span className={styles.labelText}>{labelText}</span>
    {children}
  </label>
);
