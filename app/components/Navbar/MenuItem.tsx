"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem = ({ onClick, label }: MenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-800/75 text-white transition"
    >
      {label}
    </div>
  );
};

export default MenuItem;
