import React from "react";

const CategoryMenu = ({ icon, label }: any) => {
  return (
    <div className="flex flex-row h-[56px] gap-4 bg-neutral-700 w-full py-4 px-[24px] items-center text-[20px] cursor-pointer rounded-sm hover:bg-neutral-800 transition">
      {icon}
      {label}
    </div>
  );
};

export default CategoryMenu;
