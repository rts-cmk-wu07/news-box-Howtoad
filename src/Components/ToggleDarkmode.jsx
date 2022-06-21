/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ToggleDarkmode = () => {
  const styles = {
    toggle: css`
      max-width: 178px;
      height: 50px;
      width: 100%;
      border-radius: 25px;
      border: 1px solid grey;
      display: grid;
      margin: 0 auto;
      margin-top: 70px;
      cursor: pointer;
      & h2 {
        align-self: center;
      }
    `,
  };
  return (
    <div css={styles.toggle}>
      <h2>Toggle Dark Mode</h2>
    </div>
  );
};

export default ToggleDarkmode;
