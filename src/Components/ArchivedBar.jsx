/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Collapsible from "react-collapsible";
import CategoryInfo from "./CategoryInfo";
import { useState } from "react";
import SwipeToDelete from "react-swipe-to-delete-component";
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";
import ArchivedArticle from "./ArchivedArticle";

const ArchivedBar = ({ category }) => {
  let placeholderimg = "images/newswoman.png";
  const [arrow, setArrow] = useState("0deg");
  const [theArticle, setTheArticle] = useState(null);
  let archivedData = JSON.parse(localStorage.savedArticles || "[]");

  //a function to delete the swiped article from localstorage "savedarticles"

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
            if (item.category[0] == category) {
              return (
                <ArchivedArticle
                  key={item.id}
                  title={item.title}
                  text={item.abstract}
                  url={item.url}
                  uri={item.uri}
                  img={
                    (item.multimedia && item.multimedia[0].url) ||
                    placeholderimg
                  }
                  article={item}
                />
              );
            }
          })}
      </Collapsible>
    </>
  );
};

export default ArchivedBar;
