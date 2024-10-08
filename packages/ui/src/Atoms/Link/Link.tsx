import styles from "./Link.module.css";

interface LinkProps {
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  isDisabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  href,
  onClick,
  isDisabled = false,
  className = "",
  children,
}) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        if (!isDisabled) onClick(e);
      }}
      className={`${styles.link} ${className} ${isDisabled ? styles.disabled : ""}`}
    >
      {children}
    </a>
  );
};
