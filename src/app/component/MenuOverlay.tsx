import React from "react";
import Link from 'next/link';

interface LinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: LinkItem[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center text-white">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
