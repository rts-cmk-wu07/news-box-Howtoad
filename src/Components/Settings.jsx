/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Categories from "./Categories";
import ToggleDarkmode from "./ToggleDarkmode";
import { useContext } from "react";
import categoryContext from "../Context/CategoryContext";

const Settings = () => {
  const { category, setCategory } = useContext(categoryContext);
  const styles = {
    settings: css`
      background-color: #eceff0;
      & h1 {
        color: #87bcbf;
        font-size: 30px;
        text-align: center;
        padding-top: 29px;
      }
      h2 {
        color: #707070;
        font-size: 20px;
        text-align: center;
        font-weight: lighter;
      }
      & .version {
        color: #6e8ca0;
        font-size: 12px;
        margin: 0 auto;
        max-width: 125px;
        margin-top: 31px;
        padding-bottom: 30px;
      }
      & ul {
        background-color: #ffffff;
        list-style-type: none;
        display: grid;
        max-width: 338px;
        margin: 0 auto;
        border-radius: 10px;
        margin-top: 63px;
      }
    `,
  };
  let categoryList = [];
  category.map((item) => {
    categoryList.push(Object.keys(item));
  });

  return (
    <div css={styles.settings}>
      <h1>Manage</h1>
      <h2>Categories</h2>
      <ul>
        {categoryList.map((item) => {
          return <Categories category={item} key={item} />;
        })}
      </ul>
      <ToggleDarkmode />
      <div className="version">
        <p>Version 4.8.15.16.23.42</p>
      </div>
    </div>
  );
};

export default Settings;
