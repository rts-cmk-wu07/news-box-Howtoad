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
  let categoriesEnabled = [];
  category.map((item, i) => {
    item[categoryKeys[i][0]] && categoriesEnabled.push(Object.keys(item));
  });
  console.log(categoriesEnabled);
  return (
    <>
      <SearchBar />

      {categoriesEnabled.map((item) => {
        return <CategoryBar category={item} key={item} />;
      })}
    </>
  );
};

export default NewsBox;
