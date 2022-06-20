/** @jsxImportSource @emotion/react */
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
const Archive = () => {
  return (
    <>
      <SearchBar />
      <CategoryBar category="sports" />
      <CategoryBar category="Travel" />
    </>
  );
};

export default Archive;
