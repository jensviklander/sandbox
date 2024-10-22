import styles from './DataGridCell.module.css';

interface DataGridCellProps {
  children: React.ReactNode;
  width: number;
  borderless?: boolean;
  isSubRow?: boolean;
}

export const DataGridCell: React.FC<DataGridCellProps> = ({
  children,
  width,
  borderless = false,
  isSubRow = false
}) => (
  <td
    className={`${styles.cell} ${borderless ? styles.borderless : ''} ${
      isSubRow ? styles.subRowCell : ''
    }`}
    style={{ width }}
  >
    {children}
  </td>
);
