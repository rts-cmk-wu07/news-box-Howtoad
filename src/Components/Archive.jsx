/** @jsxImportSource @emotion/react */
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
const Archive = () => {
  let checkForCategory = new Set(
    JSON.parse(localStorage.savedArticles || "[]").map(
      (article) => article.category[0]
    )
  );
  console.log(checkForCategory);
  return (
    <>
      <SearchBar />
      {Array.from(checkForCategory).map((item) => {
        return <CategoryBar category={item} key={item} />;
      })}
    </>
  );
};

export default Archive;
