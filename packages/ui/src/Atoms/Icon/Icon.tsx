import { IoTrash } from "react-icons/io5";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const iconMapping = {
  trash: IoTrash,
  sort: FaSort,
  sortAsc: FaSortUp,
  sortDesc: FaSortDown,
};

export type IconNames = keyof typeof iconMapping;

interface IconProps {
  name: IconNames;
}

export const Icon: React.FC<IconProps> = ({ name }) => {
  const SelectedIcon = iconMapping[name];
  return SelectedIcon ? <SelectedIcon /> : null;
};
