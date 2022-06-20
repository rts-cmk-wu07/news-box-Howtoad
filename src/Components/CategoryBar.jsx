/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NewsArticle from "./NewsArticle";
import Collapsible from "react-collapsible";
import CategoryInfo from "./CategoryInfo";
import useFetch from "../useFetch";
const CategoryBar = ({ category }) => {
  let myarray = ["test1", "test2", "test3", "test4"];
  const API_URL =
    "https://newsapi.org/svc/topstories/v2/" +
    category +
    "p9wCSJU4L6Hnkh4jVmB39Yv0KeA3mkcl";

  const { data, loading, error } = useFetch(API_URL);
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
