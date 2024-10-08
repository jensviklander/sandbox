import { useState } from "react";
import "CollapsibleText.css";

interface CollapsibleTextProps {
  text: string;
  height: string | number;
}

export const CollapsibleText: React.FC<CollapsibleTextProps> = ({
  text,
  height,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return <div className="text-container"></div>;
};
