import { Input } from "../../Atoms/Input/Input";

interface TableControlMenuProps {
  onSearch: (query: string) => void;
}

export const TableControlMenu: React.FC<TableControlMenuProps> = ({
  onSearch,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <Input placeholder="Search..." onChange={(value) => onSearch(value)} />
  </div>
);
