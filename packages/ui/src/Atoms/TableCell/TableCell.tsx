import styles from "./TableCell.module.css";

interface TableCellProps {
  children: React.ReactNode;
  width: number;
}

export const TableCell: React.FC<TableCellProps> = ({ children, width }) => (
  <td className={styles.cell} style={{ width }}>
    {children}
  </td>
);
