import { Input } from "../../Atoms/Input/Input";

interface DataGridControlMenuProps {
  onSearch: (query: string) => void;
}

// TODO:
// Add styles instead of inline styling
// Rename to something more fitting
export const DataGridControlMenu: React.FC<DataGridControlMenuProps> = ({
  onSearch,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <Input placeholder="Search..." onChange={(value) => onSearch(value)} />
  </div>
);
