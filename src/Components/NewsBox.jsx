/** @jsxImportSource @emotion/react */
import SearchBar from "./SearchBar";
import CategooryBar from "./CategoryBar";

const NewsBox = () => {
  return (
    <>
      <SearchBar />
      <CategooryBar category="sports" />
      <CategooryBar category="travel" />
      <CategooryBar category="world" />
      <CategooryBar category="business" />
      <CategooryBar category="health" />
    </>
  );
};

export default NewsBox;
