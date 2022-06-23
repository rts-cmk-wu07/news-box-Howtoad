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
import { ActionContent, ItemContent } from "../styledComponents";

const NewsArticle = ({
  title,
  text,
  img,
  key,
  url,
  threshold,
  setThreshold,
  setSwipeProgress,
  setSwipeAction,
  setTriggeredItemAction,
  id,
}) => {
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
  React.useEffect(() => {
    setThreshold(0.3);
  }, [setThreshold]);

  const handleSwipeStart = () => {
    setSwipeAction("Swipe started");
    setTriggeredItemAction("None");
  };

  const handleSwipeEnd = () => {
    setSwipeAction("Swipe ended");
    setSwipeProgress();
  };

  const handleAccept = (id) => () => {
    console.log("[Handle ACCEPT]", id);
  };

  const handleOnClick = (id) => () => {
    console.log("[handle on click]", id);
  };

  const trailingActions = () => {
    <TrailingActions>
      <SwipeAction onClick={handleAccept(id)}>
        <ActionContent style={{ backgroundColor: "green" }}>
          Accept
        </ActionContent>
      </SwipeAction>
    </TrailingActions>;
  };

  return (
    <SwipeableList style={{ backgroundColor: "#ffffff" }}>
      <SwipeableListItem trailingActions={trailingActions()} key={key}>
        <ItemContent>
          <div css={styles.newsarticle} className="newsarticle">
            <div className="profilepic">
              <img src={img}></img>
            </div>
            <div className="articleinfo">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        </ItemContent>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default NewsArticle;
