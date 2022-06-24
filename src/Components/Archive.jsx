/** @jsxImportSource @emotion/react */
import SearchBar from "./SearchBar";
import ArchivedBar from "./ArchivedBar";
const Archive = () => {
  let checkForCategory = new Set(
    JSON.parse(localStorage.savedArticles || "[]").map(
      (article) => article.category[0]
    )
  );

  return (
    <>
      <SearchBar />
      {Array.from(checkForCategory).map((item) => {
        return <ArchivedBar category={item} key={item} />;
      })}
    </>
  );
};

export default Archive;
