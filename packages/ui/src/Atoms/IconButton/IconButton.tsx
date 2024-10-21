import { Icon, IconNames } from '../Icon/Icon';
import styles from './IconButton.module.css';

interface IconButtonProps {
  icon: IconNames;
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'danger';
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  type = 'secondary'
}) => {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      <Icon name={icon} />
    </button>
  );
};
