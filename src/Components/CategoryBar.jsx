/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowDown } from "react-icons/io";
const CategoryBar = () => {
  const styles = {
    categorybar: css`
      height: 58px;
      display: flex;
      padding: 10px;
        border-bottom: 1px solid grey;
      width: 100%;
      & .iconbox {
        max-width: 35px;
        height: 35px;
        width: 100%;
        background-color: white;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        display: Grid;
      }

      & img {
        max-width: 19px;
        width: 100%;
        align-self: center;
        justify-self: center;
      }
      & h2 {
        font-size: 15px;
        font-weight: bold;
        color: #334856;
        margin-left: 10px;
        justify-self: start;
        align-self: center;
      }
      & .categoryicon {
        font-size: 24px;
        justify-self: end;
        margin-left: auto;
        align-self: center;
      }
    `,
  };
  return (
    <div css={styles.categorybar}>
      <div className="iconbox">
        <img src="images/icn_surfing.png"></img>
      </div>
      <h2>SPORT</h2>
      <IoIosArrowDown className="categoryicon" />
    </div>
  );
};

export default CategoryBar;
