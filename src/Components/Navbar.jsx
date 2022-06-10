/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
const Navbar = () => {
  const styles = {
    navbar: css`
      height: 50px;
      font-size: 18px;
      display: grid;
      max-width: 376px;
      width: 376px;
      border-bottom: 1px solid grey;
      font-weight: bold;
      grid-template-columns: 1fr 1fr 1fr;
      & .backarrow {
        font-size: 24px;
        font-weight: lighter;
        margin-left: 22px;
      }
      & .settings {
        font-size: 20px;
        margin-right: 22px;
        justify-self: end;
      }
      & a {
        justify-self: center;
      }
    `,
  };
  return (
    <nav css={styles.navbar}>
      <IoIosArrowBack className="backarrow" />
      <Link to="/">Archive</Link>
      <IoMdSettings className="settings" />
    </nav>
  );
};

export default Navbar;
