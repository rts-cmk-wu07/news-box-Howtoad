/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const Categories = ({ category }) => {
  const styles = {
    categories: css`
      display: flex;
      font-size: 15px;
      font-weight: bold;
      padding: 21px;
      border-bottom: 1px solid grey;
      text-transform: capitalize;

      & p {
        align-self: center;
      }
      & .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        margin-left: auto;
      }
      & .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      & .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      & .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      & input:checked + .slider {
        background-color: #87bcbf;
      }
      & input:focus + .slider {
        box-shadow: 0 0 1px #87bcbf;
      }
      & input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
      & .slider.round {
        border-radius: 34px;
      }
      & .slider.round:before {
        border-radius: 50%;
      }
    `,
  };

  return (
    <li css={styles.categories}>
      <p>{category}</p>
      <label className="switch">
        <input type="checkbox"></input>
        <span className="slider round"></span>
      </label>
    </li>
  );
};

export default Categories;
