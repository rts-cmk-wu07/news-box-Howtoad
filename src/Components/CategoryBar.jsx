/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NewsArticle from "./NewsArticle";
import Collapsible from "react-collapsible";
import CategoryInfo from "./CategoryInfo";
import { useState } from "react";
import useFetch from "../useFetch";
import React from "react";
import { SwipeableList, Type as ListType } from "react-swipeable-list";

const CategoryBar = ({ category }) => {
  const API_URL =
    "https://api.nytimes.com/svc/topstories/v2/" +
    category +
    ".json?api-key=p9wCSJU4L6Hnkh4jVmB39Yv0KeA3mkcl";

  const { data, loading, error } = useFetch(API_URL);

  let placeholderimg = "images/newswoman.png";

  const [arrow, setArrow] = useState("0deg");

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
        {error && <p>API banned xD</p>}
        {loading && <p>Loading...</p>}
        {data &&
          data.results.map((item) => {
            item.category = category;
            return (
              <>
                {item.title &&
                  item.abstract &&
                  item.uri &&
                  item.url &&
                  item.multimedia && (
                    <SwipeableList style={{ backgroundColor: "#ffffff" }}>
                      <NewsArticle
                        key={item.id}
                        title={item.title}
                        text={item.abstract}
                        url={item.url}
                        img={
                          (item.multimedia && item.multimedia[0].url) ||
                          placeholderimg
                        }
                        article={item}
                      />
                    </SwipeableList>
                  )}
              </>
            );
          })}
      </Collapsible>
    </>
  );
};

export default CategoryBar;
