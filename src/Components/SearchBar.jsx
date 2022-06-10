/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BiSearch } from "react-icons/bi";
const SearchBar = () => {
  const styles = {
    searchwrapper: css`
      height: 85px;
      border-bottom: 1px solid grey;
      padding-top: 17px;

      & .searchbar {
        height: 45px;
        max-width: 344px;
        width: 100%;
        background-color: #c8d1d3;
        display: grid;
        margin-left: 15px;
        margin-right: 15px;
      }
      & input {
        background-color: transparent;
        border: none;
        max-width: 265px;
        width: 100%;
        grid-row: 1/2;
        margin-left: 36px;
        outline: none;
      }
      & .searchicon {
        grid-row: 1/2;
        align-self: center;
        font-size: 18px;
        justify-self: end;
        margin-right: 20px;
      }
    `,
  };
  return (
    <div css={styles.searchwrapper}>
      <div className="searchbar">
        <input type="text" placeholder="Search News"></input>
        <BiSearch className="searchicon" />
      </div>
    </div>
  );
};

export default SearchBar;
