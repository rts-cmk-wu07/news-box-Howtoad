/** @jsxImportSource @emotion/react */
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
import { useContext } from "react";
import categoryContext from "../Context/CategoryContext";

const NewsBox = () => {
  const { category, setCategory } = useContext(categoryContext);

  let categoryKeys = [];
  category.map((item) => {
    categoryKeys.push(Object.keys(item));
  });
  console.log(categoryKeys);

  return (
    <>
      <SearchBar />

      <CategoryBar category="sports" />
      <CategoryBar category="travel" />
      <CategoryBar category="world" />
      <CategoryBar category="business" />
      <CategoryBar category="health" />
    </>
  );
};

export default NewsBox;
