import styles from "./DataGridCell.module.css";

interface DataGridCellProps {
  children: React.ReactNode;
  width: number;
}

export const DataGridCell: React.FC<DataGridCellProps> = ({
  children,
  width,
}) => (
  <td className={styles.cell} style={{ width }}>
    {children}
  </td>
);
