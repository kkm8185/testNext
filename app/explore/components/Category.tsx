import CategoryMenu from "@/app/explore/components/CategoryMenu";
import React from "react";
import { FiMusic, FiBarChart, FiSmile } from "react-icons/fi";
const Category = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-4 w-full ">
      <CategoryMenu label={"최신음악"} icon={<FiMusic color="#AAAAAA" />} />
      <CategoryMenu label={"차트"} icon={<FiBarChart color="#AAAAAA" />} />
      <CategoryMenu
        label={"분위기 및 장르"}
        icon={<FiSmile color="#AAAAAA" />}
      />
    </div>
  );
};

export default Category;
