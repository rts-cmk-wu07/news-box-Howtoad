/** @jsxImportSource @emotion/react */
import SearchBar from "./SearchBar";
import CategooryBar from "./CategoryBar";

const NewsBox = () => {
  return (
    <>
      <SearchBar />
      <CategooryBar category="Sport" />
    </>
  );
};

export default NewsBox;
