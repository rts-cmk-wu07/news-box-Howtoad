/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import NewsArticle from "./NewsArticle";
import Collapsible from "react-collapsible";
import CategoryInfo from "./CategoryInfo";
const CategoryBar = ({ category }) => {
  let myarray = ["test1", "test2", "test3", "test4"];
  return (
    <>
      <Collapsible trigger={<CategoryInfo category={category} />}>
        {myarray.map((item) => (
          <NewsArticle
            title="title2"
            text="Hey Cody, you should definitely check out Yoga Six for hot yoga! They
        have..."
          />
        ))}
      </Collapsible>
    </>
  );
};

export default CategoryBar;
