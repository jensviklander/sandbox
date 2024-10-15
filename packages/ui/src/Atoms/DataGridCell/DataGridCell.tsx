import styles from './DataGridCell.module.css';

interface DataGridCellProps {
  children: React.ReactNode;
  width: number;
  borderless?: boolean;
}

export const DataGridCell: React.FC<DataGridCellProps> = ({
  children,
  width,
  borderless = false
}) => (
  <td
    className={`${styles.cell} ${borderless ? styles.borderless : ''}`}
    style={{ width }}
  >
    {children}
  </td>
);
