import { Icon, IconNames } from '../Icon/Icon';
import styles from './IconButton.module.css';

interface IconButtonProps {
  icon: IconNames;
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Icon name={icon} />
    </button>
  );
};
