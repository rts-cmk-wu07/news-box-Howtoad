/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Categories from "./Categories";
const Settings = () => {
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
    `,
  };

  return (
    <div css={styles.settings}>
      <h1>Manage</h1>
      <h2>Categories</h2>
      <Categories />
    </div>
  );
};

export default Settings;
