/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NewsArticle from "./NewsArticle";
import Collapsible from "react-collapsible";
import CategoryInfo from "./CategoryInfo";
import { useState } from "react";

const ArchivedBar = ({ category }) => {
  let placeholderimg = "images/newswoman.png";
  const [arrow, setArrow] = useState("0deg");
  let archivedData = JSON.parse(localStorage.savedArticles || "[]");
  console.log(archivedData);
  return (
    <>
      <Collapsible
        onOpening={() => {
          setArrow("90deg");
        }}
        onClosing={() => {
          setArrow("0deg");
        }}
        trigger={<CategoryInfo category={category} arrow={arrow} />}
      >
        {archivedData &&
          archivedData.map((item) => {
            item.category = category;
            return (
              <NewsArticle
                key={item.id}
                title={item.title}
                text={item.abstract}
                url={item.url}
                img={
                  (item.multimedia && item.multimedia[0].url) || placeholderimg
                }
                article={item}
              />
            );
          })}
      </Collapsible>
    </>
  );
};

export default ArchivedBar;
