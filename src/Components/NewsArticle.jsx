/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SwipeToDelete from "react-swipe-to-delete-component";
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";
const NewsArticle = ({ title, text, img, key }) => {
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
    `,
  };

  const onRight = (e) => {
    e.preventDefault();
  };
  return (
    <SwipeToDelete deleteSwipe="0.3" onRight={onRight}>
      <div css={styles.newsarticle}>
        <div className="profilepic">
          <img src={img}></img>
        </div>
        <div className="articleinfo">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </SwipeToDelete>
  );
};

export default NewsArticle;
