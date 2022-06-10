/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const NewsArticle = () => {
  const styles = {
    newsarticle: css`
      display: flex;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 20px;
      border-bottom: 1px solid grey;
      & .profilepic {
        max-width: 70px;
      }
      & .profilepic img {
        max-width: 100%;
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
      }
      & .articleinfo p {
        font-size: 14px;
        color: #6e8ca0;
      }
    `,
  };
  return (
    <div css={styles.newsarticle}>
      <div className="profilepic">
        <img src="images/newswoman.png"></img>
      </div>
      <div className="articleinfo">
        <h2>Headline</h2>
        <p>
          Hey Cody, you should definitely check out Yoga Six for hot yoga! They
          have...
        </p>
      </div>
    </div>
  );
};

export default NewsArticle;