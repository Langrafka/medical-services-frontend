"use client";
import { LinksData } from "@/src/types/LinksData";

interface NavigationProps {
  links: Array<LinksData>;
  className?: string;
  onLinkClick?: () => void;
}

export const Navigation = ({
  links,
  className,
  onLinkClick,
}: NavigationProps) => {
  return (
    <nav className={className}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="nav-link"
          onClick={onLinkClick}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};
