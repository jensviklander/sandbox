import { Input } from "../../Atoms/Input/Input";

interface DataGridControlMenuProps {
  onSearch: (query: string) => void;
}

export const DataGridControlMenu: React.FC<DataGridControlMenuProps> = ({
  onSearch,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <Input placeholder="Search..." onChange={(value) => onSearch(value)} />
  </div>
);
