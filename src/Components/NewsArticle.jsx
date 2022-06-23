/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type as ListType,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import React from "react";

const NewsArticle = ({ title, text, img, article }) => {
  const styles = {
    newsarticle: css`
      display: flex;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 20px;
      border-bottom: 1px solid grey;
      background-color: white;
      & .profilepic {
        max-width: 70px;
      }
      & .profilepic img {
        max-width: 100%;
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
      & .articleinfo {
        max-width: 240px;
        width: 100%;
        margin-left: 20px;
      }
      & .articleinfo h2 {
        font-size: 15px;
        font-weight: bold;
        color: #334856;
        text-transform: capitalize;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & .articleinfo p {
        font-size: 14px;
        color: #6e8ca0;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
      }
      & .actionlol {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 8px;
        font-size: 12px;
        font-weight: 500;
        box-sizing: border-box;
        color: #eee;
        user-select: none;
      }
      & .itemlol {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: #555878;
        border-style: solid;
        border-color: #393a52;
        border-width: 12px;
        border-top-width: 6px;
        border-bottom-width: 6px;
        color: #eee;
        user-select: none;
      }
    `,
  };
  const savingToLocalStorage = (article) => {
    let savedArticles = JSON.parse(
      localStorage.getItem("savedArticles") || "[]"
    );
    if (savedArticles.map((article) => article.uri).includes(article.uri)) {
      return;
    }
    savedArticles.push(article);
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
  };
  const trailingActions = (article) => (
    <TrailingActions>
      <SwipeAction
        onClick={() => {
          //archive what is swiped to localstorage

          savingToLocalStorage(article);
        }}
      >
        Action name
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableListItem
      trailingActions={trailingActions(article)}
      threshold={0.5}
    >
      <div className="itemlol">
        <div css={styles.newsarticle} className="newsarticle">
          <div className="profilepic">
            <img src={img}></img>
          </div>
          <div className="articleinfo">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </SwipeableListItem>
  );
};

export default NewsArticle;
