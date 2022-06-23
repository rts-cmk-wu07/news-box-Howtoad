/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import "react-swipe-to-delete-component/dist/swipe-to-delete.css";
import {
  SwipeableList,
  SwipeableListItem,
  LeadingActions,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

const NewsArticle = ({ title, text, img, key, url }) => {
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
  const leadingActions = () => {
    <LeadingActions>
      <SwipeAction
        onClick={() => {
          console.log("leading action");
        }}
      >
        leadtest
      </SwipeAction>
    </LeadingActions>;
  };
  const trailingActions = () => {
    <TrailingActions>
      <SwipeAction
        onClick={() => {
          console.log("trailing action");
        }}
      >
        trailtest
      </SwipeAction>
    </TrailingActions>;
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
        children={<div className="newsarticle"> </div>}
      >
        <div css={styles.newsarticle} className="newsarticle">
          <div className="profilepic">
            <img src={img}></img>
          </div>
          <div className="articleinfo">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default NewsArticle;
